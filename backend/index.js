import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pharmacyroute from "./route/list.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import contectRoute from "./route/contact.route.js";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT=process.env.PORT|| 4000;
const URI=process.env.MongoDBURI;

// connect to mongodb server
try{
mongoose.connect(URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});
console.log("Connected to mongodb")
}  catch(error){
console.log("Error:",error)
  }


// app.get('/', (req, res) => {
//   res.send('Hello world');
// });


//defining routes
app.use("/Pharmacystore",pharmacyroute)
app.use("/user",userRoute)
app.use("/contactes",contectRoute)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});