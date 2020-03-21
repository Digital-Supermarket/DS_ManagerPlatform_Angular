import { ManagerModel } from 'src/app/manager/manager-model';

const { fields } = ManagerModel;

export default [
  fields.id,
  fields.headOf,
  fields.departments,
  fields.createdAt,
  fields.updatedAt,
];
