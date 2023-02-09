const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// define properties for accounts.
const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
// Need ba itu?
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
