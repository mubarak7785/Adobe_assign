const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    phone: { type: Number, required: true },
    spoken_languages: [{ type: String, required: true }],
    availability:[{ type: String, required: true }] 
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
