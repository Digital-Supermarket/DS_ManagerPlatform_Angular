import { ShoppingListModel } from 'src/app/shopping-list/shopping-list-model';

const { fields } = ShoppingListModel;

export default [
  fields.id,
  fields.item,
  fields.createdAt,
  fields.updatedAt,
];
