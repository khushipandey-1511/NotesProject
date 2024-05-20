const express = require("express");
const router= express.Router();
const dashboardController=require("../controller/dashboardController");

//Dashboard Router
router.get("/dashboard",dashboardController.dashpage)

module.exports=router;

