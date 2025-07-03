"use strict";
let Models = require("../models");

const getAllFeets = (req, res) => {
    Models.Feet.find({})
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getFeetById = (req, res) => {
    Models.Feet.findById(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({ result: 404, message: "Feet not found" });
            }
            res.send({ result: 200, data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getFeetByName = (req, res) => {
    Models.Feet.find({ name: { $regex: req.params.name, $options: "i" } })
        .then((data) => {
            if (data.length === 0) {
                return res.status(404).json({ message: "No feets found matching that name" });
            }
            res.send({ result: 200, data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getFeetNames = (req, res) => {
    Models.Feet.find({}, { name: 1, _id: 0 })
        .then((data) => {
            const names = data.map((item) => item.name);
            res.send({ result: 200, data: names });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createFeet = (req, res) => {
    const newFeet = new Models.Feet(req.body);
    newFeet
        .save()
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateFeet = (req, res) => {
    Models.Feet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteFeet = (req, res) => {
    Models.Feet.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getAllFeets,
    getFeetById,
    getFeetByName,
    getFeetNames,
    createFeet,
    updateFeet,
    deleteFeet,
};
