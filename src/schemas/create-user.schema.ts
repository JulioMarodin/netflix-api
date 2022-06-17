import Joi from "joi";

const CreateUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default CreateUserSchema;
