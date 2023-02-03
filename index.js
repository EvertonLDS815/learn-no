const express = require("express");
require("dotenv").config();
const connetToDB = require("./database/db");
const path = require("path");
let no = null;
let noDel = null;

const app = express();
const port = process.env.PORT || 550;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connetToDB();

const routes = require("./routes/router");

app.use(routes);

app.listen(port, () =>
  console.log(`🚀 My Server is on port http://localhost:${port}`)
);
