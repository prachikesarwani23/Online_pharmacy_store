import express from "express";
import { feedback } from "../controller/contact.controller.js";
const router=express.Router()

router.post("/contact",feedback);
export default router;