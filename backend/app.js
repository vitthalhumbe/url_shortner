import express from "express";
import urlRoutes from "./url.routes.js";
import { redirectToUrl } from "./url.controller.js";
const app = express();

app.use(express.json());

app.get("/:shortCode", redirectToUrl);

app.use("/api", urlRoutes);
app.get("/", (req, res)=> {
    res.send("let's go it's running !");
});


export default app;