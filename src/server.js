const { createServer } = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const consola = require("consola");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const db = process.env.DB_URL;
const server = createServer(app);
mongoose
  .connect(db)
  .then(() =>
    consola.ready({ message: "Database connection successful", badge: true })
  );

server.listen(PORT, () =>
  consola.success(`Server is listening on port ${PORT}`)
);
process.on("uncaughtException", (err) => {
  console.error(err && err.stack);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
});
