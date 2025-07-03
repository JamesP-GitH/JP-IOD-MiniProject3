let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get all necks
router.get("/", (req, res) => {
    Controllers.neckController.getAllNecks(req, res);
});

// Get neck by ID
router.get("/:id", (req, res) => {
    Controllers.neckController.getNeckById(req, res);
});

// Get necks by name (search with regex)
router.get("/name/:name", (req, res) => {
    Controllers.neckController.getNeckByName(req, res);
});

// Get list of neck names only
router.get("/names", (req, res) => {
    Controllers.neckController.getNeckNames(req, res);
});

// Create a new neck
router.post("/", (req, res) => {
    Controllers.neckController.createNeck(req, res);
});

// Update neck by ID
router.put("/:id", (req, res) => {
    Controllers.neckController.updateNeck(req, res);
});

// Delete neck by ID
router.delete("/:id", (req, res) => {
    Controllers.neckController.deleteNeck(req, res);
});

module.exports = router;
