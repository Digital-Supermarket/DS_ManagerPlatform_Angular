import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import { ShoppingListField } from 'src/app/shopping-list/shopping-list-field';

function label(name) {
  return i18n(`entities.client.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "min": 2
  }),
  phoneNumber: new StringField('phoneNumber', label('phoneNumber'), {
    "required": true,
    "min": 9,
    "max": 10
  }),
  email: new StringField('email', label('email'), {
    "required": true
  }),
  password: new StringField('password', label('password'), {
    "required": true
  }),
  shoppingLists: ShoppingListField.relationToMany('shoppingLists', label('shoppingLists'), {}),
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

export class ClientModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
