const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    }
  }
);

module.exports = Media = mongoose.model("mmedia", mediaSchema);