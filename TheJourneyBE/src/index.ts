import express  from "express";
import dotenv from "dotenv"
import authRouter from "./routers/authRouter";
import cors from "cors";
import db from "../src/lib/db"
import journeyRouter from "./routers/journeyRouter";

dotenv.config()

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(authRouter)
app.use("/journey",journeyRouter)


app.listen(PORT, async() => {
    await db.$connect()
    console.log(`Server running in port: ${PORT}`)
})