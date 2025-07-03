// To run with node to import my saved json to mongodb

const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Leg = require("../models/leg");

const mongoUri = "mongodb://localhost:27017/MiniProject3";

async function run() {
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB");

        const rawData = fs.readFileSync(path.join(__dirname, "items-legs.json"));
        const jsonData = JSON.parse(rawData);

        const excludeFields = [
            "release_date",
            "incomplete",
            "duplicate",
            "last_updated",
            "stackable",
            "stacked",
            "linked_id_item",
            "linked_id_noted",
            "linked_id_placeholder",
            "placeholder",
            "buy_limit",
            "noted",
            "noteable",
            "equipable_by_player",
            "equipable_weapon",
        ];

        const sortedItems = Object.values(jsonData)
            .sort((a, b) => a.id - b.id)
            .map((item) => {
                item._id = item.id;
                delete item.id;

                for (const field of excludeFields) {
                    delete item[field];
                }

                return item;
            });

        await Leg.deleteMany({});
        console.log("Old items removed.");

        await Leg.insertMany(sortedItems);
        console.log(`${sortedItems.length} items inserted.`);
    } catch (error) {
        console.error("Error importing items:", error);
    }
}

run()
    .catch((err) => console.error("Import failed:", err))
    .finally(() => mongoose.disconnect());
