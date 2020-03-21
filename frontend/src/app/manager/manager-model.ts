import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import { ClerkField } from 'src/app/clerk/clerk-field';
import { DepartmentField } from 'src/app/department/department-field';

function label(name) {
  return i18n(`entities.manager.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  headOf: ClerkField.relationToMany('headOf', label('headOf'), {}),
  departments: DepartmentField.relationToMany('departments', label('departments'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export class ManagerModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
