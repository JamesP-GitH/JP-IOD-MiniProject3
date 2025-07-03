const express = require("express");
const app = express();

let dbConnect = require("./dbConnect");
require("dotenv").config();

app.use(express.json());

let weaponRoutes = require("./routes/weaponRoutes");
let shieldRoutes = require("./routes/shieldRoutes");

app.use("/api/weapons", weaponRoutes);
app.use("/api/shields", shieldRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
