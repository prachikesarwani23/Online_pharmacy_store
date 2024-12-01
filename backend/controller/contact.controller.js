import conts from "../model/contact.model.js";

 export const feedback=async(req,res)=>{
    try{
const response=req.body;
await conts.create(response);
return res.status(201).json({message:"Message send Successfully"});
    }
    catch{
return res.status(500).json({message:"Message not delivered"});

    }
};
