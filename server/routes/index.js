const express = require("express");
const router= express.Router();
const mainController=require("../controller/mainController");


//app routes
router.get("/",(mainController.homePage))
router.get("/about",(mainController.about))

module.exports=router;