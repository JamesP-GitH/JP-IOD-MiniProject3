let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get list of body names only
router.get("/names", (req, res) => {
    Controllers.bodyController.getBodyNames(req, res);
});

// Get bodies by name
router.get("/name/:name", (req, res) => {
    Controllers.bodyController.getBodyByName(req, res);
});

// Get body by ID
router.get("/:id", (req, res) => {
    Controllers.bodyController.getBodyById(req, res);
});

// Get all bodies
router.get("/", (req, res) => {
    Controllers.bodyController.getAllBodies(req, res);
});

// Create a new body
router.post("/", (req, res) => {
    Controllers.bodyController.createBody(req, res);
});

// Update body by ID
router.put("/:id", (req, res) => {
    Controllers.bodyController.updateBody(req, res);
});

// Delete body by ID
router.delete("/:id", (req, res) => {
    Controllers.bodyController.deleteBody(req, res);
});

module.exports = router;
