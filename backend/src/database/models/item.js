const database = require('../database');
const Schema = database.Schema;

/**
 * Item database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ItemSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    expiryDate: {
      type: String,
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

ItemSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ItemSchema.set('toJSON', {
  getters: true,
});

ItemSchema.set('toObject', {
  getters: true,
});

const Item = database.model('item', ItemSchema);

module.exports = Item;
