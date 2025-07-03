let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get list of ring names only
router.get("/names", (req, res) => {
    Controllers.ringController.getRingNames(req, res);
});

// Get rings by name (search with regex)
router.get("/name/:name", (req, res) => {
    Controllers.ringController.getRingByName(req, res);
});

// Get ring by ID
router.get("/:id", (req, res) => {
    Controllers.ringController.getRingById(req, res);
});

// Get all rings
router.get("/", (req, res) => {
    Controllers.ringController.getAllRings(req, res);
});

// Create a new ring
router.post("/", (req, res) => {
    Controllers.ringController.createRing(req, res);
});

// Update ring by ID
router.put("/:id", (req, res) => {
    Controllers.ringController.updateRing(req, res);
});

// Delete ring by ID
router.delete("/:id", (req, res) => {
    Controllers.ringController.deleteRing(req, res);
});

module.exports = router;
