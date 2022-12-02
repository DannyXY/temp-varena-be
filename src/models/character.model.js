const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const characterSchema = mongoose.Schema({
  characterId: {
    type: Number,
  },
  svgs: {
    type: String,
    required: true,
  },
  fighterName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  stringCommand: {
    type: String,
  },
  isMinted: {
    type: Boolean,
    default: false,
  },
});

characterSchema.plugin(AutoIncrement, { inc_field: "characterId" });
const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
