import express from "express";

const app = express();

app.use(express.json());



app.get("/", (req, res)=> {
    res.send("let's go it's running !");
});


export default app;