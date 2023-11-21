require('dotenv').config()
const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>My first beginning</h1>");
});

app.listen(process.env.PORT,()=>{
    console.log(`App server is listening in port: ${process.env.PORT}`)
})