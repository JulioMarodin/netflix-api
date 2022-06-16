import "reflect-metadata";
import express from "express";

import databaseInitializer from "../configs/database/data-source";
import startRoutes from "./routes";

const app = express();

const PORT = 3000;

databaseInitializer();
startRoutes(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
