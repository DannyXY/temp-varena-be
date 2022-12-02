const { Router } = require("express");
const {
  createCustomFigter,
  getAllUnmintedCharacters,
  getCustomFigters,
  minted,
} = require("../controllers/character.controller");
const { authGuard } = require("../middlewares/auth.middleware");

const router = Router();
/**
 * @swagger
 * components:
 *    schemas:
 *      Character:
 *        type: object
 *        properties:
 *          fighterId:
 *            type: number
 *            description: The battle Index.
 *            example: 12
 *          svgs:
 *            type: string
 *            description: The NFT characteristic SVGs.
 *            example: <svg><path /></svg>
 *          fighterName:
 *             type: string
 *             description: Fighter's name
 *             example: destroyooor
 *          stringCommand:
 *             type: string
 *             description: string command required to build character
 *             example: llrz||er|2z
 * /characters:
 *     get:
 *         summary: Retrieve characters
 *         description: Retrieves all Characters in fight queue
 *         responses:
 *           200:
 *             description: Fetch Character.
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                       items:
 *                         type: object
 *                         properties:
 *                           status:
 *                             type: boolean,
 *                             description: status.
 *                             example: true
 *                           message:
 *                             type: string,
 *                             description: status text.
 *                             example: retrieved successfully
 *                           data:
 *                             type: array
 *                             items:
 *                               $ref: '#/components/schemas/Character'
 */
router.get("/", getCustomFigters);
/**
 *   @swagger
 *   /characters/create:
 *   post:
 *     summary: Creates a new Character.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               svgs:
 *                 type: string
 *                 description: SVG image of NFT.
 *                 example: <svg><path /></svg>
 *               fighterName:
 *                 type: string
 *                 description: Nft Name
 *                 example: Destroyooor
 *               stringCommand:
 *                 type: string
 *                 description: string command required to build character
 *                 example: llrz||er|2z
 *     responses:
 *       200:
 *         description: Create Character.
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
 *                          $ref: '#/components/schemas/Character'
 */
router.post("/create", createCustomFigter);
route.patch("/mint/:id", minted);
router.get("/unmintedCharacters", getAllUnmintedCharacters);

module.exports = router;
