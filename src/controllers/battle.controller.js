// Import Battle to Get Battles..
const Battle = require("../models/battles.model");

// Helper Function to query DB
async function getAllBattle() {
    const battle = await Battle.find({}, {
        '_id': 0,
        '__v': 0
    });
    return battle;
}

async function battleInfo(req, res) {
  try {
    const battleInfo = await Battle.findOne({}).sort({ _id: 1 });
    res.status(200).send(battleInfo);
  } catch (error) {
    res.status(400), send();
  }
}

async function getWinner() {
  const winner = await Battle.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  )
    .sort({ battleIndex: 1 })
    .select({
      battleIndex: 1,
      winnerNftId: 1,
      totalContestants: 1,
    });
  return winner;
}

// HTTP Function to Get All Battles
async function httpGetAllBattle(req, res) {
  const battle = await getAllBattle();
  return res.status(200).json(battle);
}

// HTTP Function to get Winner..
async function httpGetWinner(req, res) {
  const winner = await getWinner();
  return res.status(200).json(winner);
}

// Export HTTP Function..
module.exports = {
  httpGetAllBattle,
  httpGetWinner,
  battleInfo,
};