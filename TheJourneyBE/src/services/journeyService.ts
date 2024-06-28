import db from "../lib/db";
import { Journey } from "@prisma/client";

export const addJouney = async (userId: number, body : Journey) => {
    const user = await db.user.findFirst({
        where: {id: userId},
    });

    if(!user) {
        throw new Error("User not found");
    }

    return db.journey.create({
        data: {
            ...body,
            userId: userId,
        },
        include: {
            user: true
        }
    })
}

export const findByTitle = async ( title: string) => {
    return await db.journey.findMany({
        where: {title},
    })
}

export const findById = async ( id: number) => {
    return await db.journey.findFirst({
        where: {id},
    })
}

export const updateJourney = async (id: number, body: Journey) => {
    return db.journey.update({
        where: {id},
        data: {
            ...body
        }
    })
}

export const deleteJourney = async (id: number) => {
    return db.journey.delete({
        where: {id},
    })
}