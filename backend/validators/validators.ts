import Joi from 'joi'

export const phoneNumberSchema = Joi.string()
  .length(10)
  .pattern(/^(98|97)/)
  .required();

  export const verityOtpSchema=Joi.object({
      otp:Joi.string().required(),
      phoneNumber:Joi.string().length(10).pattern(/^(98|97)/)
      .required(),
      hash:Joi.string().required()
  })

  export const activateScheme=Joi.object({
    name:Joi.string().required().min(3).max(20),
    avatar:Joi.string().required()
  })