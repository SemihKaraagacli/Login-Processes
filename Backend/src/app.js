const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const index = require("./routers/index");
const login = require("./routers/login");
const register = require("./routers/register");

app.use("/", index);
app.use("/login", login);
app.use("/register", register);

app.listen(port, () => {
  console.log(`>>>> http://localhost:${port} portundan başladı. <<<<.`);
});
