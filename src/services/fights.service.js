const Fighter = require("../models/fighter.model")

const saveFighters = async (req, res) => {
    try {
        const {eligibleFighters} = await req.body.eligibleFighters
        if (eligibleFighters.lenght > 1) {
            let response = []
            for (let i = 0; i < eligibleFighters.lenght; i++) {
                const eligibleFighter = await Fighter.create({
                    NFTId: eligibleFighters[i].NFTId,
                    eligible: true,
                    shape: eligibleFighters[i].shape,
                    dateOfBattle: new Date()
                })
                response.push(eligibleFighter)
            }
            return response
        } if (eligibleFighters.lenght === 1) {
            let response = await Fighter.create({
                    NFTId: eligibleFighters[i].NFTId,
                    eligible: true,
                    shape: eligibleFighters[i].shape,
                    dateOfBattle: new Date()
            })
            return response
        }
    } catch (error) {
        return (error)
    }
}

module.exports = { saveFighters };