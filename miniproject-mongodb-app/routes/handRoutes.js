let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get list of hand names only
router.get("/names", (req, res) => {
    Controllers.handController.getHandNames(req, res);
});

// Get hands by name (search with regex)
router.get("/name/:name", (req, res) => {
    Controllers.handController.getHandByName(req, res);
});

// Get hand by ID
router.get("/:id", (req, res) => {
    Controllers.handController.getHandById(req, res);
});

// Get all hands
router.get("/", (req, res) => {
    Controllers.handController.getAllHands(req, res);
});

// Create a new hand
router.post("/", (req, res) => {
    Controllers.handController.createHand(req, res);
});

// Update hand by ID
router.put("/:id", (req, res) => {
    Controllers.handController.updateHand(req, res);
});

// Delete hand by ID
router.delete("/:id", (req, res) => {
    Controllers.handController.deleteHand(req, res);
});

module.exports = router;
