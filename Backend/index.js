import express from "express"
import dotenv from "dotenv"
import mongoose, { Mongoose } from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.router.js"

import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())



dotenv.config();
const PORT=process.env.PORT || 4000
const URI=process.env.URI;

try {
    mongoose.connect(URI);

    console.log("connect to mongodb")
} catch (error) {
    console.log("Error" + error);
    
}
app.use("/book",bookRoute);
app.use("/user",userRoute );

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
