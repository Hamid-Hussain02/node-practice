const bodyParser =require('body-parser')
const express =require('express')
const companies =require('./controllers/company')
const companyRoutes = require("./routes/company");

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



app.listen(port,()=>{
    console.log("server is runing on", port)
})