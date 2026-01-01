import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";


dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log("mongo connected");
    app.listen(PORT, () => {
        console.log(`server : ${PORT}`);
    });
}).catch((err) => {
    console.error("Mongo conneciton failed :", err);
});