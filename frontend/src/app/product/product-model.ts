import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import DecimalRangeField from 'src/app/shared/fields/decimal-range-field';
import DecimalField from 'src/app/shared/fields/decimal-field';
import ImagesField from 'src/app/shared/fields/images-field';

function label(name) {
  return i18n(`entities.product.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  code: new StringField('code', label('code'), {}),
  name: new StringField('name', label('name'), {}),
  price: new DecimalField('price', label('price'), {}),
  weight: new DecimalField('weight', label('weight'), {}),
  size: new StringField('size', label('size'), {}),
  photos: new ImagesField('photos', label('photos'), 'product/photos',{}),
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
  priceRange: new DecimalRangeField(
    'priceRange',
    label('priceRange'),
  ),
  weightRange: new DecimalRangeField(
    'weightRange',
    label('weightRange'),
  ),
};

export class ProductModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
