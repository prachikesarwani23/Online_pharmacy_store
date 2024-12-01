import mongoose from "mongoose";
const pharmacyschema=mongoose.Schema({
    name:String,
    Rowmaterial:Number,
    categories:String,
    image:String
})
const Pham=mongoose.model("Pham",pharmacyschema);
export default Pham;