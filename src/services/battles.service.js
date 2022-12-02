const Battle = require("./../models/battles.model");
// import Winner from "./../models/winner.models";
const Winner = require("./../models/winner.models");

const newBattleResult = async (
  winnerNFTId,
  totalContestants,
  dateOfBattle,
  walletAddress
) => {
  try {
    const newBattle = await Battle.create({
      winnerNFTId: winnerNFTId,
      totalContestants: totalContestants,
      dateOfBattle: totalContestants,
    });
    const battleId = newBattle.id;
    const nftId = newBattle.winnerNFTId;
    const newWinner = await Winner.create(battleId, nftId, walletAddress);

    return { newBattle, newWinner };
  } catch (error) {
    throw error;
  }
};

module.exports = { newBattleResult };
