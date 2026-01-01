import express from "express";
import {createNewUrl, redirectToUrl} from "./url.controller.js";



const router = express.Router();

router.post("/shorten", createNewUrl);
export default router;