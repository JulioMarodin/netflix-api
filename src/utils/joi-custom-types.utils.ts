import Joi from "joi";

export const joiEnumOfString = (enumerator: Record<string, any>) => {
  return Joi.string().valid(...Object.values(enumerator));
};
