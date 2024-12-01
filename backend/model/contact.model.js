import mongoose from "mongoose";

const infoSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    },
});

const conts=mongoose.model("contact",infoSchema);
export default conts;