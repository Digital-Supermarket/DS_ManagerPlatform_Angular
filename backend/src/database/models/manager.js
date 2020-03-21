const database = require('../database');
const Schema = database.Schema;

/**
 * Manager database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ManagerSchema = new Schema(
  {
    headOf: [{
      type: Schema.Types.ObjectId,
      ref: 'clerk',
    }],
    departments: [{
      type: Schema.Types.ObjectId,
      ref: 'department',
    }],
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

ManagerSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ManagerSchema.set('toJSON', {
  getters: true,
});

ManagerSchema.set('toObject', {
  getters: true,
});

const Manager = database.model('manager', ManagerSchema);

module.exports = Manager;
