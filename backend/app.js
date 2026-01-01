import express from "express";
import path from "node:path";
import urlRoutes from "./url.routes.js";
import { redirectToUrl } from "./url.controller.js";
const app = express();

app.use(express.json());

app.get("/:shortCode", redirectToUrl);

app.use("/api", urlRoutes);
app.get("/", (req, res)=> {
    res.sendFile(path.resolve("./frontend/index.html"));
});


export default app;