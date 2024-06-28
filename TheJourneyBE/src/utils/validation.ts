import joi from "joi"

export const registerSchema = joi.object({
    fullname: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    phone: joi.number().required(),
})

export const loginSchema = joi.object({
    email: joi.string().required(),
    password : joi.string().required(),
})