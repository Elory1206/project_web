const express = require("express");
const morgan = require("morgan");
const path = require("path");

const boardRouter = require("./Routers/boardRouter");
const globalRouter = require("./Routers/globalRouter")

const app = express();

app.use(morgan("dev"));
app.set("view engine", "pug");
app.use("/static", express.static(path.join(__dirname, "/static")));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use("/", globalRouter);
app.use("/b", boardRouter);

app.listen(4000, () => {
    console.log("4000 PORT.WEB SERVER OPEN!");
});