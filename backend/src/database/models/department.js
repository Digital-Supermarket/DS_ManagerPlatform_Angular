const database = require('../database');
const Schema = database.Schema;

/**
 * Department database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const DepartmentSchema = new Schema(
  {
    aisles: [{
      type: Schema.Types.ObjectId,
      ref: 'aisle',
    }],
    managedBy: {
      type: Schema.Types.ObjectId,
      ref: 'manager',
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    importHash: { type: String },
  },
  { timestamps: true },
);

DepartmentSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

DepartmentSchema.set('toJSON', {
  getters: true,
});

DepartmentSchema.set('toObject', {
  getters: true,
});

const Department = database.model('department', DepartmentSchema);

module.exports = Department;
