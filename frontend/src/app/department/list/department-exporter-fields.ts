import { DepartmentModel } from 'src/app/department/department-model';

const { fields } = DepartmentModel;

export default [
  fields.id,
  fields.aisles,
  fields.managedBy,
  fields.createdAt,
  fields.updatedAt,
];
