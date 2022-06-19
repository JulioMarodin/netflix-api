import "reflect-metadata";
import "dotenv/config";
import express from "express";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import databaseInitializer from "./infrastructure/database/data-source";
import startRoutes from "./routes";

export const app: express.Application = express();

const PORT = 3000;
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

const strategy = new JwtStrategy(opts, function (payload, done) {
  console.log(payload);
  return done(null, {});
});

passport.use(strategy);

databaseInitializer();
startRoutes(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
