import { ProductModel } from 'src/app/product/product-model';

const { fields } = ProductModel;

export default [
  fields.code,
  fields.name,
  fields.price,
  fields.weight,
  fields.size,
  fields.photos,
];
