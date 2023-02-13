import mongoose from "mongoose";
const Schema = mongoose.Schema;
// define properties for accounts.
const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accountAccess: {
    type: String,
    required: true,
    enum: ["faculty", "admin"]
  }
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);
export default Account;
