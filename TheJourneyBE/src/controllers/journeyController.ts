import * as jouneyService from "../services/journeyService"
import { Request, Response } from "express"

export const addJourney = async(req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const body = req.body
        return res.status(200).json(await jouneyService.addJouney(+userId, body))

        
    } catch (error) {
        console.log(error)
        return res.status(500).json("Error saat add journey")
    }
}

export const findByTitle = async(req: Request, res: Response) => {
    try{
        const title = req.params.title
        return res.status(200).json(await jouneyService.findByTitle(title))

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
export const findById = async(req: Request, res: Response) => {
    try{
        const id =  parseInt(req.params.id)
        return res.status(200).json(await jouneyService.findById(id))

    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const updateJourney = async(req: Request, res: Response) => {
    try {
        const id = req.params.id
        const body = req.body
        return res.status(200).json(await jouneyService.updateJourney(+id, body))

    } catch (error) {
        console.log(error)
        return res.status(500).json("Error saat update journey")
    }
}
export const deleteJourney = async(req: Request, res: Response) => {
    try {
        const id = req.params.id
        return res.status(200).json(await jouneyService.deleteJourney(+id))

    } catch (error) {
        console.log(error)
        return res.status(500).json("Error saat delete journey")
    }
}