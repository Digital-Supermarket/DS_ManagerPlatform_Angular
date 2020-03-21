import { AisleModel } from 'src/app/aisle/aisle-model';

const { fields } = AisleModel;

export default [
  fields.id,
  fields.item,
  fields.clerk,
  fields.createdAt,
  fields.updatedAt,
];
