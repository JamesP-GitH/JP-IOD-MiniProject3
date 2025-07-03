let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get list of cape names only
router.get("/names", (req, res) => {
    Controllers.capeController.getCapeNames(req, res);
});

// Get capes by name
router.get("/name/:name", (req, res) => {
    Controllers.capeController.getCapeByName(req, res);
});

// Get cape by ID
router.get("/:id", (req, res) => {
    Controllers.capeController.getCapeById(req, res);
});

// Get all capes
router.get("/", (req, res) => {
    Controllers.capeController.getAllCapes(req, res);
});

// Create a new cape
router.post("/", (req, res) => {
    Controllers.capeController.createCape(req, res);
});

// Update cape by ID
router.put("/:id", (req, res) => {
    Controllers.capeController.updateCape(req, res);
});

// Delete cape by ID
router.delete("/:id", (req, res) => {
    Controllers.capeController.deleteCape(req, res);
});

module.exports = router;
