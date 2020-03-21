import { ClerkModel } from 'src/app/clerk/clerk-model';

const { fields } = ClerkModel;

export default [
  fields.id,
  fields.shiftIsDay,
  fields.departments,
  fields.createdAt,
  fields.updatedAt,
];
