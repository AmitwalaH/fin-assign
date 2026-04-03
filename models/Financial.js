const mongoose = require("mongoose");

const financialSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    category: {
      type: String,
      enum: [
        "salary",
        "investment",
        "food",
        "travel",
        "entertainment",
        "other",
      ],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      index: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Financial", financialSchema);
