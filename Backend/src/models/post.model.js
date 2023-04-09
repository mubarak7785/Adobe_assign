const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    user_id: { type: String, ref: 'User' },
    content: { type: String, minlength: 1, maxlength: 300 },
    likes: { type: Number, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
  );

module.exports = mongoose.model("post", postSchema);
