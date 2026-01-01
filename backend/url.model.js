import mongoose, { mongo } from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        orginialUrl: {type: String, required: true},
        shortCode: {type: String, required:true, unique:true},
        clickCount: {type:Number, default:0},
        expiresAt: {type:Date, default:null}
    },
    {timestamps:true}
);

const Url = mongoose.model("Url", urlSchema);
export default Url;