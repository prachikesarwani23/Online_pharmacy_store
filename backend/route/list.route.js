import express from "express";
 import {getpham} from '../controller/list.controller.js';
 import { getpham1 } from "../controller/list.controller.js";
 import { getpham2 } from "../controller/list.controller.js";
// const {getpham,getpham1,getpham2}=require("../controller/list.controller.js")
const router=express.Router();
router.get("/",getpham);
router.get("/app",getpham1);
router.get("/right",getpham2);
export default router;
