import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ManagerApi } from 'src/app/manager/manager.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ManagerField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/manager',
      Permissions.values.managerRead,
      ManagerApi.listAutocomplete,
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
      '/manager',
      Permissions.values.managerRead,
      ManagerApi.listAutocomplete,
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
