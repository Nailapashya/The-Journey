import db from "../lib/db"
import * as validation from "../utils/validation"
import { User } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async(body: User) => {
    const {error, value} = validation.registerSchema.validate(body)
    if(error) {
        console.log(error)
    }

    const exitingEmail = await db.user.count({
        where: {email: body.email}
    })
    if(exitingEmail > 0) {
        throw new Error("Email already register")
    }

    const hashPassword = await bcrypt.hash(body.password, 10)

    const user = await db.user.create({
        data: {
            username: body.username,
            fullname: body.fullname,
            email: body.email,
            password: hashPassword,
            phone: body.phone,
            profile_picture: body.profile_picture,

        }
    })

    return user
}

export const login = async (body: User) => {
    const {error, value} = validation.loginSchema.validate(body)
    if(error) {
        throw new Error("Terjadi error saat login")
    }

    const existingEmail = await db.user.findFirst({
        where: {email: value.email}
    })
    if(!existingEmail) {
        throw new Error("Email does not registed")
    }

    const matchPassword = await bcrypt.compare(value.password, existingEmail.password!)
    if (!matchPassword) {
        throw new Error("Password does not match")
    }

    const user = {
        username: existingEmail.username,
        fullname: existingEmail.fullname,
        email: existingEmail.email,
        password: matchPassword,
        phone: existingEmail.phone
    }

    const token = jwt.sign(existingEmail, process.env.SECRET_KEY!, {expiresIn: "1d"})
    return {user, token}
}