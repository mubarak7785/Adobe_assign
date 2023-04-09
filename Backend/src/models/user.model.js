const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    name: { type: String, minlength: 1, maxlength: 50 },
    email: { type: String, match: /^\S+@\S+\.\S+$/ },
    bio: { type: String, maxlength: 200 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
  );


module.exports = mongoose.model("user", userSchema);
