let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get list of shield names only
router.get("/names", (req, res) => {
    Controllers.shieldController.getShieldNames(req, res);
});

// Get shields by name (search with regex)
router.get("/name/:name", (req, res) => {
    Controllers.shieldController.getShieldByName(req, res);
});

// Get shield by ID
router.get("/:id", (req, res) => {
    Controllers.shieldController.getShieldById(req, res);
});

// Get all shields
router.get("/", (req, res) => {
    Controllers.shieldController.getAllShields(req, res);
});

// Create a new shield
router.post("/", (req, res) => {
    Controllers.shieldController.createShield(req, res);
});

// Update shield by ID
router.put("/:id", (req, res) => {
    Controllers.shieldController.updateShield(req, res);
});

// Delete shield by ID
router.delete("/:id", (req, res) => {
    Controllers.shieldController.deleteShield(req, res);
});

module.exports = router;
