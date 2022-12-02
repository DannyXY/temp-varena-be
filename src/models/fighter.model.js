const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const fighterSchema = new mongoose.Schema({
  fighterId: {
    type: Number,
  },
  svgs: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

fighterSchema.plugin(AutoIncrement, { inc_field: "fighterId" });

const Fighter = mongoose.model("Fighter", fighterSchema);
module.exports = Fighter;
