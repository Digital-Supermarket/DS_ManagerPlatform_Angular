import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import { AisleField } from 'src/app/aisle/aisle-field';
import { ManagerField } from 'src/app/manager/manager-field';

function label(name) {
  return i18n(`entities.department.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  aisles: AisleField.relationToMany('aisles', label('aisles'), {}),
  managedBy: ManagerField.relationToOne('managedBy', label('managedBy'), {}),
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

export class DepartmentModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
