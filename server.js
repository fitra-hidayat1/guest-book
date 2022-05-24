//Require dotenv
require("dotenv").config();

const express = require("express");

//Import Router
const bagianRoutes = require('./src/routes/bagianRoute')
const subBagianRoutes = require('./src/routes/subBagianRoute')
const tiketAntreanRoutes = require('./src/routes/tiketAntreanRoute')
const tiketTamuRoutes = require('./src/routes/tiketTamuRoute')
const identitasTamuRoutes = require('./src/routes/identitasTamuRoute')

const PORT = process.env.PORT || 5000;
const app = express();


//To read req.body
app.use(express.json()); //Enable req.body JSON type
app.use(express.urlencoded({ extended: false })); //Support urlencode body


//Routing API
app.use("/api/v1/bagian", bagianRoutes);
app.use("/api/v1/subbagian", subBagianRoutes);
app.use("/api/v1/tiket-antrean", tiketAntreanRoutes);
app.use("/api/v1/tiket-tamu", tiketTamuRoutes);
app.use("/api/v1/identitas-tamu", identitasTamuRoutes);

//Routing Homepage
app.get("/", (req, res) => res.send("Welcome to Guest Book API"));

//404 Not found
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

//Require DB Connection
const { sequelize } = require("./src/models");

//Run Server
app.listen(PORT, async () => {
  console.log(`Server running on Port: ${PORT}`);
  await sequelize.authenticate();
  console.log("Database Connected");
});


// module.exports = { app, dbConnection }; // for unit test
