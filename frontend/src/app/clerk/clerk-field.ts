import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ClerkApi } from 'src/app/clerk/clerk.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ClerkField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/clerk',
      Permissions.values.clerkRead,
      ClerkApi.listAutocomplete,
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
      '/clerk',
      Permissions.values.clerkRead,
      ClerkApi.listAutocomplete,
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
