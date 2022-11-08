const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Express lida com requisições de padrão urlencoded
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3000);
