import { DataSource } from "typeorm";

import Movie from "../../src/entities/movie.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "netflix",
  entities: [Movie],
  synchronize: true,
});

async function databaseInitializer() {
  try {
    await AppDataSource.initialize();
    console.log("Banco de dados conectado");
  } catch (e: unknown) {
    console.log(e);
  }
}

export default databaseInitializer;
