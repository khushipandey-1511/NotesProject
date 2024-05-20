const express= require("express");
// const expressLayouts=require("express-ejs-layouts");
const path = require("path");
const app = express();
const ejsMate= require("ejs-mate");
const mongoose=require("mongoose");
const session = require("express-session");
const passport = require("passport");
const MangoStore= require("connect-mongo");


const port= 8080
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//connect to database
const dbUrl = process.env.MONGO_URL;
main().then(()=>{
    console.log("DB is Connected");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(dbUrl);
}


// app.use(expressLayouts);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine('ejs',ejsMate)
app.set("layouts","./layouts/main");
app.use(express.static(path.join(__dirname,"public")));

//Routes
app.use("/",require("./server/routes/index"));
app.use("/",require("./server/routes/auth"));
app.use("/",require("./server/routes/dashboard"));
//handle 404
app.get("*",(req,res)=>{
    res.status(404).render("404")
})
app.listen(port,()=>{
    console.log("App is listing to sever 8080")
})