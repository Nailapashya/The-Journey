import { Router } from "express"
import * as journeyController from "../controllers/journeyController"
import authentication from "../middlewares/authentication"

const journeyRouter = Router()

journeyRouter.post("/addJourney/:userId", authentication, journeyController.addJourney)
journeyRouter.get("/findByTitle/:title", authentication, journeyController.findByTitle)
journeyRouter.post("/findById/:id", authentication, journeyController.findById)
journeyRouter.put("/updateJourney/:id", authentication, journeyController.updateJourney)
journeyRouter.delete("/delete/:id", authentication, journeyController.deleteJourney)

export default journeyRouter