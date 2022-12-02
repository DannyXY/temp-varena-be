const { Router } = require("express");
const { battleInfo } = require("../controllers/battle.controller");
const {
  getHistory,
  createfighter,
  fight,
  saveEligibleFighters,
} = require("../controllers/fights.controller");
const { httpGetLeaderBoard } = require("../controllers/leaderboard.controller");
const { authGuard } = require("../middlewares/auth.middleware");

const router = Router();
/**
 * @swagger
 * components:
 *    schemas:
 *      Battle:
 *        type: object
 *        properties:
 *          battleIndex:
 *            type: number
 *            description: The battle Index.
 *            example: 67abxnaamc822378b
 *          winnerNFTId:
 *            type: string
 *            description: The Winenrs NFT ID.
 *            example: 25
 *          totalContestants:
 *             type: number
 *             description: Total contestants
 *             example: 150
 *
 * 
 * /fight/result:
 *   post:
 *     summary: Returns the result of a fight.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: Server access passcode.
 *                 example: WRONG PASSWORD
 *     responses:
 *       200:
 *         description: A Battle Winner.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   items:
 *                     type: object
 *                     properties:
 *                       status:
 *                         type: boolean
 *                         description: status.
 *                         example: true
 *                       message:
 *                         type: string
 *                         description: status text.
 *                         example: created successfully
 *                       battle:
 *                          $ref: '#/components/schemas/Battle'
 *                       winner:
 *                          type: string,
 *                          description: winner id,
 *                          example: 987654rfghjttyu876543wsdf
 */
router.post("/result", authGuard, fight);

// /**
//  * @swagger
//  * /fight/createFighter:
//  *   post:
//  *     summary: Creates a new fighter.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               svgs:
//  *                 type: string
//  *                 description: SVG image of NFT.
//  *                 example: <svg><path /></svg>
//  *               name:
//  *                 nftName: string
//  *                 description: Nft Name
//  *                 example: Destroyooor
//  *     responses:
//  *       200:
//  *         description: Create Fighter.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                   items:
//  *                     type: object
//  *                     properties:
//  *                       status:
//  *                         type: boolean,
//  *                         description: status.
//  *                         example: true
//  *                       message:
//  *                         type: string,
//  *                         description: status text.
//  *                         example: created successfully
//  *                       newFighter:
//  *                          $ref: '#/components/schemas/Fighter'
//  * */
// router.post("/createFighter", createfighter);

/**
 * @swagger
 * /fight/battleInfo:
 *   get:
 *     summary: Retrieve BattleInfo
 *     description: Retrieve the battle info of current fight
 * */
router.get("/battleInfo", battleInfo);

/**
 * @swagger
 * /fight/getfighthistory:
 *   get:
 *     summary: Retrieve fight history list
 *     description: Retrieve the history of occured fights
 *     responses:
 *       200:
 *         description: Retrieves all previous fights
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Battle'
 * */
router.get("/getfighthistory", getHistory);

/**
 * @swagger
 * /fight/leaderboard:
 *   get:
 *     summary: Retrieve Leaderboard
 *     description: Retrieve the leaderboard info of the whole game*/
router.get("/leaderboard", httpGetLeaderBoard);

/**
 * @swagger
 * /eligible-fighters:
 *   post:
 *     summary: Returns fighters that match eligitibility criteria.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nftId:
 *                 type: string
 *                 description: nftId.
 *                 example: 72892dhiubha87238912
 *               isEligible:
 *                 type: boolean
 *                 description: check if user is eligible.
 *                 example: true
 *               shape:
 *                 type: string
 *                 description: nftId.
 *                 example: triangle
 *     responses:
 *       200:
 *         description: Eligible fighter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   items:
 *                     type: object
 *                     properties:
 *                       status:
 *                         type: boolean,
 *                         description: status.
 *                         example: true
 *                       message:
 *                         type: string,
 *                         description: status text.
 *                         example: created successfully
 *                       newFighter:
 *                          type: object,
 *                          properties:
 *                              _id:
 *                                  type: string,
 *                                  example: 8392ucsjnca8930
 *                              shape:
 *                                  type: string,
 *                                  example: triangle
 *                              isEligible:
 *                                  type: boolean,
 *                                  example: false
 *                              nftId:
 *                                  type: string,
 *                                  example: 72892dhiubha87238912
 * */

router.post("/eligible-fighters", saveEligibleFighters);

router.get("/test", (req, res) => res.status(200).send("Everything smooth!!!"));

module.exports = router;
