const Battle = require("../models/battles.model");
const Winner = require("../models/winner.models");
const Fighter = require("../models/fighter.model");
const { saveFighters } = require("../services/fights.service");

const fight = async (req, res, next) => {
  try {
    const newBattle = await Battle.create(req.body);
    const isWinnerExist = await Winner.findOne({
      nftId: req.body.winnerNFTId,
    });
    let winner;
    if (!isWinnerExist) {
      winner = await Winner.create({
        nftId: newBattle.winnerNFTId,
        battleId: newBattle.id.toString(),
        ...req.body,
      });
    }
    isWinnerExist.totalWins++;
    winner = await isWinnerExist.save();

    return res.status(201).json({
      status: "success",
      message: "created successfully",
      battle: newBattle,
      winner: winner,
    });
  } catch (error) {
    next(error);
  }
};

const createfighter = async (req, res, next) => {
  try {
    const newFighter = await Fighter.create(req.body);
    return res.status(201).json({
      status: "success",
      message: "created successfully",
      newFighter,
    });
  } catch (error) {
    return next(error);
  }
};

const getHistory = async (req, res, next) => {
  try {
    const getFightHistory = await Battle.find();

    const _getFightHistory = getFightHistory.map((obj) => {
      return {
        date: obj.createdAt.toLocaleDateString(),
        time: obj.createdAt.toLocaleTimeString(),
        contestants: obj.totalContestants,
        winner: obj.winnerNFTId,
      };
    });

    res.status(200).json(_getFightHistory);
  } catch (error) {
    return next(error);
  }
};

const saveEligibleFighters = async (req, res) => {
  try {
    const response = await saveFighters(req);

    return res.status(200).json({
      status: "success",
      message:
        "NFTs that are eligible for fight today has been saved successfully",
      data: response,
    });
  } catch (error) {
    return error;
  }
};

module.exports = { fight, createfighter, getHistory, saveEligibleFighters };
