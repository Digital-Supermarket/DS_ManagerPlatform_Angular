const database = require('../database');
const Schema = database.Schema;

/**
 * Clerk database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ClerkSchema = new Schema(
  {
    shiftIsDay: {
      type: Boolean,
      default: false
    },
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

ClerkSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ClerkSchema.set('toJSON', {
  getters: true,
});

ClerkSchema.set('toObject', {
  getters: true,
});

const Clerk = database.model('clerk', ClerkSchema);

module.exports = Clerk;
