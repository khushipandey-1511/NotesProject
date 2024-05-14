const express= require("express");
const expressLayouts=require("express-ejs-layouts");
const path = require("path");
const app = express();

const port= 8080

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressLayouts);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
// app.set("layouts","./layouts/main")
app.use(express.static(path.join(__dirname,"/public")));
app.get ("/",(req,res)=>{
    res.render("index.ejs")
})

app.listen(port,()=>{
    console.log("App is listing to sever 8080")
})