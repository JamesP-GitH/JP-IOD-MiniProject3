"use strict";
let Models = require("../models");

const getAllWeapons = (req, res) => {
    Models.Weapon.find({})
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getWeaponById = (req, res) => {
    Models.Weapon.findById(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Weapon not found" });
            }
            res.send({ result: 200, data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getWeaponByName = (req, res) => {
    Models.Weapon.find({ name: { $regex: req.params.name, $options: "i" } })
        .then((data) => {
            if (data.length === 0) {
                return res.status(404).json({ message: "No weapons found matching that name" });
            }
            res.send({ result: 200, data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getWeaponByType = (req, res) => {
    const type = req.params.type;
    Models.Weapon.find({ "weapon.weapon_type": type })
        .then((data) => {
            if (data.length === 0) {
                return res.status(404).json({ message: "No weapons found matching that type" });
            }
            res.send({ result: 200, data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getAllWeaponTypes = (req, res) => {
    Models.Weapon.distinct("weapon.weapon_type")
        .then((types) => {
            if (!types || types.length === 0) {
                return res.status(404).json({ message: "No weapon types found" });
            }
            res.send({ result: 200, data: types });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getWeaponNames = (req, res) => {
    Models.Weapon.find({}, { name: 1, _id: 0 })
        .then((data) => {
            const names = data.map((item) => item.name);
            res.send({ result: 200, data: names });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createWeapon = (req, res) => {
    const newWeapon = new Models.Weapon(req.body);
    newWeapon
        .save()
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateWeapon = (req, res) => {
    Models.Weapon.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteWeapon = (req, res) => {
    Models.Weapon.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getAllWeapons,
    getWeaponById,
    getWeaponByName,
    getWeaponByType,
    getAllWeaponTypes,
    getWeaponNames,
    createWeapon,
    updateWeapon,
    deleteWeapon,
};
