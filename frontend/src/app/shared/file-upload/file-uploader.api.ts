import { environment } from 'src/environments/environment';
import axios from 'axios';
import { AuthToken } from 'src/app/auth/auth-token';

export class FileUploaderApi {
  static async upload(file, path, filename) {
    const token = await AuthToken.get();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', filename);
    await axios.post(
      `${environment.backendUrl}/upload/${path}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: token ? `Bearer ${token}` : '',
        },
      },
    );

    const privateUrl = `${path}/${filename}`;

    return `${
      environment.backendUrl
    }/download?privateUrl=${privateUrl}`;
  }
}
