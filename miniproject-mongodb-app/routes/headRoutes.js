let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get list of head names only
router.get("/names", (req, res) => {
    Controllers.headController.getHeadNames(req, res);
});

// Get heads by name (search with regex)
router.get("/name/:name", (req, res) => {
    Controllers.headController.getHeadByName(req, res);
});

// Get head by ID
router.get("/:id", (req, res) => {
    Controllers.headController.getHeadById(req, res);
});

// Get all heads
router.get("/", (req, res) => {
    Controllers.headController.getAllHeads(req, res);
});

// Create a new head
router.post("/", (req, res) => {
    Controllers.headController.createHead(req, res);
});

// Update head by ID
router.put("/:id", (req, res) => {
    Controllers.headController.updateHead(req, res);
});

// Delete head by ID
router.delete("/:id", (req, res) => {
    Controllers.headController.deleteHead(req, res);
});

module.exports = router;
