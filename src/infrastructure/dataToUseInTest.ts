import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const generateUser = () => {
  const email = faker.internet.email();
  const password = faker.word.preposition(4);
  // const password = bcrypt.hashSync(faker.word.preposition(4), 10);

  return {
    email,
    password,
  };
};

export default generateUser;
