const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const battleSchema = new mongoose.Schema(
  {
    battleIndex: {
      type: Number,
    },
    winnerNFTId: {
      type: String,
      required: [true, "Kindly provide the name of the winner"],
    },

    totalContestants: {
      type: Number,
      required: [
        true,
        "Kindly provide the total number of people that participated in the battle",
      ],
    },
    dateOfBattle: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);
battleSchema.plugin(AutoIncrement, { inc_field: "battleIndex" });

const Battle = mongoose.model("Battle", battleSchema);
module.exports = Battle;
