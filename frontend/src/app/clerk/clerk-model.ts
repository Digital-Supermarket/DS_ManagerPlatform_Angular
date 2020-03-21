import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import BooleanField from 'src/app/shared/fields/boolean-field';
import { DepartmentField } from 'src/app/department/department-field';

function label(name) {
  return i18n(`entities.clerk.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  shiftIsDay: new BooleanField('shiftIsDay', label('shiftIsDay')),
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

export class ClerkModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
