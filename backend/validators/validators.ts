import Joi from 'joi'

export const phoneNumberSchema = Joi.string()
  .length(10)
  .pattern(/^(98|97)/)
  .required();