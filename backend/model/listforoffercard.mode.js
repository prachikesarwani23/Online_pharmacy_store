import mongoose from "mongoose";
const pharmacyschema2=mongoose.Schema({
    name:String,
    price:String,
    offer:String,
    image:String,
    Button:String,
    information:String
})
const Pham2=mongoose.model("Pham2",pharmacyschema2);
export default Pham2;