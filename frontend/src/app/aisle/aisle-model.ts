import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import { ItemField } from 'src/app/item/item-field';
import { ClerkField } from 'src/app/clerk/clerk-field';

function label(name) {
  return i18n(`entities.aisle.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  item: ItemField.relationToMany('item', label('item'), {}),
  clerk: ClerkField.relationToMany('clerk', label('clerk'), {}),
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

export class AisleModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
