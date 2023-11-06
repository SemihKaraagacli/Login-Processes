const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const cors = require("cors");
const corsConfig = {
  origin: true,
  credentials: true,
};
require("dotenv").config();

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const index = require("./routers/index");
const login = require("./routers/login");
const register = require("./routers/register");
const auth = require("./routers/auth");

app.use("/", index);
app.use("/login", login);
app.use("/register", register);
app.use("/auth", auth);

app.listen(port, () => {
  console.log(`>>>> http://localhost:${port} portundan başladı. <<<<.`);
});
