const database = require('../database');
const Schema = database.Schema;

/**
 * Aisle database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const AisleSchema = new Schema(
  {
    item: [{
      type: Schema.Types.ObjectId,
      ref: 'item',
    }],
    clerk: [{
      type: Schema.Types.ObjectId,
      ref: 'clerk',
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

AisleSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

AisleSchema.set('toJSON', {
  getters: true,
});

AisleSchema.set('toObject', {
  getters: true,
});

const Aisle = database.model('aisle', AisleSchema);

module.exports = Aisle;
