import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { AisleApi } from 'src/app/aisle/aisle.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class AisleField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/aisle',
      Permissions.values.aisleRead,
      AisleApi.listAutocomplete,
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
      '/aisle',
      Permissions.values.aisleRead,
      AisleApi.listAutocomplete,
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
