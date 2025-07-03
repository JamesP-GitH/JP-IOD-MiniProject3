let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get all feets
router.get("/", (req, res) => {
    Controllers.feetController.getAllFeets(req, res);
});

// Get feet by ID
router.get("/:id", (req, res) => {
    Controllers.feetController.getFeetById(req, res);
});

// Get feets by name (search with regex)
router.get("/name/:name", (req, res) => {
    Controllers.feetController.getFeetByName(req, res);
});

// Get list of feet names only
router.get("/names", (req, res) => {
    Controllers.feetController.getFeetNames(req, res);
});

// Create a new feet
router.post("/", (req, res) => {
    Controllers.feetController.createFeet(req, res);
});

// Update feet by ID
router.put("/:id", (req, res) => {
    Controllers.feetController.updateFeet(req, res);
});

// Delete feet by ID
router.delete("/:id", (req, res) => {
    Controllers.feetController.deleteFeet(req, res);
});

module.exports = router;
