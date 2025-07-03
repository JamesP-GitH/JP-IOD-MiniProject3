// To run with node to import my saved json to mongodb

const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Weapon = require("./models/weapon");

const mongoUri = "mongodb://localhost:27017/MiniProject3"; 

async function run() {
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB");

        const rawData = fs.readFileSync(path.join(__dirname, "items-weapon.json"));
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

        const cleanedItems = Object.values(jsonData).map((item) => {
            item._id = item.id;
            delete item.id;

            for (const field of excludeFields) {
                if (field in item) {
                    delete item[field];
                    console.log(`Removed ${field} from item ${item._id}`);
                }
            }

            return item;
        });

        await Weapon.deleteMany({});
        console.log("Old items removed.");

        await Weapon.insertMany(cleanedItems);
        console.log(`${cleanedItems.length} items inserted.`);
    } catch (error) {
        console.error("Error importing items:", error);
    }
}

run()
    .catch((err) => console.error("Import failed:", err))
    .finally(() => mongoose.disconnect());
