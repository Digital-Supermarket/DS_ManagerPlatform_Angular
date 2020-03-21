import * as uuid from 'uuid/v4';
import filesize from 'filesize';
import { i18n } from 'src/i18n';
import { FileUploaderApi } from './file-uploader.api';

function extractExtensionFrom(filename) {
  if (!filename) {
    return null;
  }

  const regex = /(?:\.([^.]+))?$/;
  return regex.exec(filename)[1];
}

export class FileUploader {
  static validate(file, schema) {
    if (!schema) {
      return;
    }

    if (schema.image) {
      if (!file.type.startsWith('image')) {
        throw new Error(i18n('fileUploader.image'));
      }
    }

    if (schema.size && file.size > schema.size) {
      throw new Error(
        i18n('fileUploader.size', filesize(schema.size)),
      );
    }

    const extension = extractExtensionFrom(file.name);

    if (
      schema.formats &&
      !schema.formats.includes(extension)
    ) {
      throw new Error(
        i18n(
          'fileUploader.formats',
          schema.formats.join('/'),
        ),
      );
    }
  }

  static async upload(path, file, schema) {
    try {
      this.validate(file, schema);
    } catch (error) {
      return Promise.reject(error);
    }

    const extension = extractExtensionFrom(file.name);
    const id = uuid();
    const filename = `${id}.${extension}`;
    const privateUrl = `${path}/${filename}`;

    const publicUrl = await FileUploaderApi.upload(
      file,
      path,
      filename,
    );

    return {
      id: id,
      name: file.name,
      sizeInBytes: file.size,
      privateUrl,
      publicUrl,
      new: true,
    };
  }
}
