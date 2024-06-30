import * as Joi from "joi";

export const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
});
