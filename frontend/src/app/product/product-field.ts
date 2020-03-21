import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ProductApi } from 'src/app/product/product.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ProductField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/product',
      Permissions.values.productRead,
      ProductApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.code,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/product',
      Permissions.values.productRead,
      ProductApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.code,
        };
      },
      options,
    );
  }
}
