import express from "express";
import {createNewUrl, getUrlAnalytics,} from "./url.controller.js";



const router = express.Router();

router.post("/shorten", createNewUrl);
router.get("/analytics/:shortCode", getUrlAnalytics);
export default router;