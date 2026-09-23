import Joi from "joi";

const clbValidation = Joi.object({
    name:Joi.string().trim().max(64).required(),
    email:Joi.string().trim().email().required(),
    message:Joi.string().trim().min(3).max(2000).required()
})

export{
    clbValidation
}