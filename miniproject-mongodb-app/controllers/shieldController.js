"use strict";
let Models = require("../models");

const getAllShields = (req, res) => {
    Models.Shield.find({})
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getShieldById = (req, res) => {
    Models.Shield.findById(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({ result: 404, message: "Shield not found" });
            }
            res.send({ result: 200, data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const getShieldByName = (req, res) => {
    Models.Shield.find({ name: { $regex: req.params.name, $options: "i" } })
        .then((data) => {
            if (data.length === 0) {
                return res.status(404).json({ message: "No shields found matching that name" });
            }
            res.send({ result: 200, data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getShieldNames = (req, res) => {
    Models.Shield.find({}, { name: 1, _id: 0 })
        .then((data) => {
            const names = data.map((item) => item.name);
            res.send({ result: 200, data: names });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createShield = (req, res) => {
    const newShield = new Models.Shield(req.body);
    newShield
        .save()
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateShield = (req, res) => {
    Models.Shield.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteShield = (req, res) => {
    Models.Shield.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getAllShields,
    getShieldById,
    getShieldByName,
    getShieldNames,
    createShield,
    updateShield,
    deleteShield,
};
