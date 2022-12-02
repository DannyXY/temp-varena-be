// Require Winner model to Get LeaderBoard
const Winner = require("../models/winner.models");

// Helper Function to commuinicate with the db
async function getLeaderBoard() {
  const board = await Winner.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  )
    .sort({ totalWins: 1 })
    .select({ nftId: 1 });
  return board;
}

// HTTP Functions..
async function httpGetLeaderBoard(req, res) {
  const board = await getLeaderBoard();
  return res.status(200).json(board);
}

// Export HTTP Function
module.exports = { httpGetLeaderBoard };
