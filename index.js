const express =require('express')
const companies =require('./controller/company')

// const express = require("express");
// const users = require("./controllers/user");
const app = express();
const port = 8080;
const userRoutes = require("./routes/user");

// const app = express()

// const port =8080;



app.get("/", (req, res) => {
    console.log("called")
    companies.getCompanies(req,res)
});

app.use("/api/company", userRoutes);


app.listen(port,()=>{
    console.log("server is runing on", port)
})