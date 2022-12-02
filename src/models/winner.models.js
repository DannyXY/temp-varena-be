const mongoose = require("mongoose");
const winnerSchema = new mongoose.Schema(
  {
    winDate: {
      type: String,
    },
    battleId: {
      type: String,
      required: [true, "Please enter the battle ID"],
    },
    nftId: {
      type: String,
      ref: "Winner",
      required: true,
    },
    walletAddress: {
      type: String,
      required: [true, "Kindly provide the wallet address of the winner"],
    },
    totalWins: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);
const Winner = mongoose.model("Winner", winnerSchema);
module.exports = Winner;
