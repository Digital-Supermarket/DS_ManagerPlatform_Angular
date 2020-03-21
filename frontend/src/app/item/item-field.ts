import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ItemApi } from 'src/app/item/item.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ItemField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/item',
      Permissions.values.itemRead,
      ItemApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/item',
      Permissions.values.itemRead,
      ItemApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
