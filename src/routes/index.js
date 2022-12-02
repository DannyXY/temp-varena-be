const fightRoutes = require("./fights.routes");
const customFigterRoutes = require("./character.routes");

const routes = (app) => {
  // Connect to specialized routes
  app.use("/api/v1/fight/", fightRoutes);
  app.use("/api/v1/characters", customFigterRoutes);

  // Handle incorrect endpoints
  app.all("*", (req, res) =>
    res.status(404).send({
      status: 404,
      Error: "Oops... URL does not exists or has been modified",
    })
  );
};

module.exports = routes;
