const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * Product database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ProductSchema = new Schema(
  {
    code: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    size: {
      type: String,
    },
    photos: [FileSchema],
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

ProductSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ProductSchema.set('toJSON', {
  getters: true,
});

ProductSchema.set('toObject', {
  getters: true,
});

const Product = database.model('product', ProductSchema);

module.exports = Product;
