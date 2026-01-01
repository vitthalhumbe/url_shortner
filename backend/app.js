import express from "express";
import urlRoutes from "./url.routes.js";
const app = express();

app.use(express.json());


app.use("/api", urlRoutes);
app.get("/", (req, res)=> {
    res.send("let's go it's running !");
});


export default app;