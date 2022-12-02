const Character = require("../models/character.model");

const createCustomFigter = async (req, res, next) => {
  try {
    const newCharacter = await Character.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "created successfully",
      data: newCharacter,
    });
  } catch (error) {
    next(error);
  }
};

const getCustomFigters = async (req, res, next) => {
  try {
    const allCharacters = await Character.find({});
    return res.status(200).json({
      status: "success",
      message: "Retrieved successfully",
      data: allCharacters,
    });
  } catch (error) {
    next(error);
  }
};
const getAllUnmintedCharacters = async (req, res, next) => {
  try {
    const unmintedFigters = await Character.find({ isMinted: false });
    return res.status(200).json({
      status: "success",
      message: "Retrieved successfully",
      data: unmintedFigters,
    });
  } catch (error) {
    next(error);
  }
};
const minted = async (req, res, next) => {
  try {
    const update = await Creature.findByIdAndUpdate(req.params.id, {
      isMinted: true,
    });
    return res.status(200).json({
      status: "success",
      message: "mint status updated successfully",
      data: update,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCustomFigter,
  getCustomFigters,
  getAllUnmintedCharacters,
  minted,
};
