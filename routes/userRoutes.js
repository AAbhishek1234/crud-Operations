import express from "express"
import { createUser, fetchall } from "../controllers/userContoller.js"
const router = express.Router()

router.post("/user",createUser)
router.get("/fetch",fetchall)



export default router