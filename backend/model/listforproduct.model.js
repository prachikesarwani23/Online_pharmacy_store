import mongoose from "mongoose";
const pharmacyschema1=mongoose.Schema({
    name:String,
    price:String,
    offer:String,
    Image:String,
    button:String
})
const Pham1=mongoose.model("Pham1",pharmacyschema1);
export default Pham1;