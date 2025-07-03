let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get all weapons
router.get("/", (req, res) => {
    Controllers.weaponController.getAllWeapons(req, res);
});

// Get weapons by name
router.get("/name/:name", (req, res) => {
    Controllers.weaponController.getWeaponByName(req, res);
});

// Get weapon by type
router.get("/type/:type", (req, res) => {
    Controllers.weaponController.getWeaponByType(req, res);
});

// Get weapon by ID
router.get("/:id", (req, res) => {
    Controllers.weaponController.getWeaponById(req, res);
});

// Create a new weapon
router.post("/", (req, res) => {
    Controllers.weaponController.createWeapon(req, res);
});

// Update weapon by ID
router.put("/:id", (req, res) => {
    Controllers.weaponController.updateWeapon(req, res);
});

// Delete weapon by ID
router.delete("/:id", (req, res) => {
    Controllers.weaponController.deleteWeapon(req, res);
});

module.exports = router;
