import { ItemModel } from 'src/app/item/item-model';

const { fields } = ItemModel;

export default [
  fields.id,
  fields.product,
  fields.expiryDate,
  fields.createdAt,
  fields.updatedAt,
];
