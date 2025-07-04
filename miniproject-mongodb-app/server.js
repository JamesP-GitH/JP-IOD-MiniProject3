const express = require("express");
const app = express();

let dbConnect = require("./dbConnect");
require("dotenv").config();

app.use(express.json());

let weaponRoutes = require("./routes/weaponRoutes");
let shieldRoutes = require("./routes/shieldRoutes");
let headRoutes = require("./routes/headRoutes");
let handRoutes = require("./routes/handRoutes");
let bodyRoutes = require("./routes/bodyRoutes");
let capeRoutes = require("./routes/capeRoutes");
let ammoRoutes = require("./routes/ammoRoutes");
let feetRoutes = require("./routes/feetRoutes");
let legRoutes = require("./routes/legRoutes");
let neckRoutes = require("./routes/neckRoutes");
let ringRoutes = require("./routes/ringRoutes");

app.use("/api/weapons", weaponRoutes);
app.use("/api/shields", shieldRoutes);
app.use("/api/heads", headRoutes);
app.use("/api/hands", handRoutes);
app.use("/api/bodies", bodyRoutes);
app.use("/api/capes", capeRoutes);
app.use("/api/ammos", ammoRoutes);
app.use("/api/feets", feetRoutes);
app.use("/api/legs", legRoutes);
app.use("/api/necks", neckRoutes);
app.use("/api/rings", ringRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
