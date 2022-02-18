const bodyParser =require('body-parser')
const express =require('express')
const companies =require('./controllers/company')
const teams =require('./controllers/team')
const companyRoutes = require("./routes/company");
const teamRoutes = require("./routes/team");
const userRoutes = require("./routes/user");

const app = express();

const multiParty =require('connect-multiparty')




app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use(multiParty())

// const express = require("express");
// const users = require("./controllers/user");

const port = 8080;




// const app = express()

// const port =8080;




app.get("/", (req, res) => {
    console.log("called")
    companies.getCompanies(req,res)
});

app.use("/api/company", companyRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/user", userRoutes);



app.listen(port,()=>{
    console.log("server is runing on", port)
})