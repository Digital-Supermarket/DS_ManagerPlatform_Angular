import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';
import { ProductField } from 'src/app/product/product-field';

function label(name) {
  return i18n(`entities.item.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  product: ProductField.relationToOne('product', label('product'), {}),
  expiryDate: new DateField('expiryDate', label('expiryDate'), {}),
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
  expiryDateRange: new DateRangeField(
    'expiryDateRange',
    label('expiryDateRange'),
  ),
};

export class ItemModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
