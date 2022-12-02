const express = require("express");
const routes = require("./routes");
const mongoSanitize = require("express-mongo-sanitize");
const logger = require("morgan");

const app = express();

// app.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "VArena Express Server",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It persists and retrieves data.",
  },
  servers: [
    {
      url: "http://localhost:5000/api/v1/",
      description: "Development server",
    },
    {
      url: "https://api.varena.hng.tech/api/v1/",
      description: "Live server",
    },
    {
      url: "https://api-varena.onrender.com/api/v1/",
      description: "Live server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());

routes(app);

module.exports = app;
