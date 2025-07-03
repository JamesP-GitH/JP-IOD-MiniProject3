let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Get all ammos
router.get("/", (req, res) => {
    Controllers.ammoController.getAllAmmos(req, res);
});

// Get ammo by ID
router.get("/:id", (req, res) => {
    Controllers.ammoController.getAmmoById(req, res);
});

// Get ammos by name (search with regex)
router.get("/name/:name", (req, res) => {
    Controllers.ammoController.getAmmoByName(req, res);
});

// Get list of ammo names only
router.get("/names", (req, res) => {
    Controllers.ammoController.getAmmoNames(req, res);
});

// Create a new ammo
router.post("/", (req, res) => {
    Controllers.ammoController.createAmmo(req, res);
});

// Update ammo by ID
router.put("/:id", (req, res) => {
    Controllers.ammoController.updateAmmo(req, res);
});

// Delete ammo   by ID
router.delete("/:id", (req, res) => {
    Controllers.ammoController.deleteAmmo(req, res);
});

module.exports = router;
