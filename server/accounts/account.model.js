const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: { type: String, unique: true, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  medicines: { type: String, required: true },
});

accountSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
    delete ret._id;
    delete ret.passwordHash;
  },
});

module.exports = mongoose.model("Account", accountSchema);
