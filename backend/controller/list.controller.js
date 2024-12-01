import Pham from "../model/list.model.js";
import Pham1 from "../model/listforproduct.model.js";
import Pham2 from "../model/listforoffercard.mode.js";

export const getpham=async(req,res)=>{
    try{
const op=await Pham.find()
res.status(200).json(op)
    }catch(error){
        console.log("Error",error)
        res.status(500).json(error)

    }
}

export const getpham1=async(req,res)=>{
    try{
const op1=await Pham1.find()
res.status(200).json(op1)
    }catch(error){
        console.log("Error",error)
        res.status(500).json(error)

    }
}

export const getpham2=async(req,res)=>{
    try{
const op2=await Pham2.find()
res.status(200).json(op2)
    }catch(error){
        console.log("Error",error)
        res.status(500).json(error)

    }
}