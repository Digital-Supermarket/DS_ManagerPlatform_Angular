const database = require('../database');
const Schema = database.Schema;

/**
 * ShoppingList database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ShoppingListSchema = new Schema(
  {
    item: [{
      type: Schema.Types.ObjectId,
      ref: 'item',
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

ShoppingListSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ShoppingListSchema.set('toJSON', {
  getters: true,
});

ShoppingListSchema.set('toObject', {
  getters: true,
});

const ShoppingList = database.model('shoppingList', ShoppingListSchema);

module.exports = ShoppingList;
