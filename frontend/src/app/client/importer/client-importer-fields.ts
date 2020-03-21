import { ClientModel } from 'src/app/client/client-model';

const { fields } = ClientModel;

export default [
  fields.name,
  fields.phoneNumber,
  fields.email,
  fields.password,
  fields.shoppingLists,
];
