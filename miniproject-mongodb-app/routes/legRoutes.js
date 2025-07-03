let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get all legs
router.get("/", (req, res) => {
    Controllers.legController.getAllLegs(req, res);
});

// Get leg by ID
router.get("/:id", (req, res) => {
    Controllers.legController.getLegById(req, res);
});

// Get legs by name (search with regex)
router.get("/name/:name", (req, res) => {
    Controllers.legController.getLegByName(req, res);
});

// Get list of leg names only
router.get("/names", (req, res) => {
    Controllers.legController.getLegNames(req, res);
});

// Create a new leg
router.post("/", (req, res) => {
    Controllers.legController.createLeg(req, res);
});

// Update leg by ID
router.put("/:id", (req, res) => {
    Controllers.legController.updateLeg(req, res);
});

// Delete leg by ID
router.delete("/:id", (req, res) => {
    Controllers.legController.deleteLeg(req, res);
});

module.exports = router;
