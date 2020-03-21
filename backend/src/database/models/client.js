const database = require('../database');
const Schema = database.Schema;

/**
 * Client database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ClientSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: 9,
      maxlength: 10,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    shoppingLists: [{
      type: Schema.Types.ObjectId,
      ref: 'shoppingList',
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

ClientSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ClientSchema.set('toJSON', {
  getters: true,
});

ClientSchema.set('toObject', {
  getters: true,
});

const Client = database.model('client', ClientSchema);

module.exports = Client;
