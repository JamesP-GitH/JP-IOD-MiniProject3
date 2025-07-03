const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weaponStanceSchema = new Schema(
    {
        combat_style: String,
        attack_type: String,
        attack_style: String,
        experience: String,
        boosts: mongoose.Schema.Types.Mixed,
    },
    { _id: false }
);

const weaponSchema = new Schema(
    {
        attack_speed: Number,
        weapon_type: String,
        stances: [weaponStanceSchema],
    },
    { _id: false }
);

const equipmentSchema = new Schema(
    {
        attack_stab: Number,
        attack_slash: Number,
        attack_crush: Number,
        requirements: mongoose.Schema.Types.Mixed,
    },
    { _id: false }
);

const itemSchema = new Schema(
    {
        _id: Number,
        name: String,
        quest_item: Boolean,
        equipment: equipmentSchema,
        weapon: weaponSchema,
        extra: mongoose.Schema.Types.Mixed,
    },
    { strict: false }
);

module.exports = mongoose.model("weapon", itemSchema);
