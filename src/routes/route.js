const express=require("express")
const router=express.Router()

const userController=require("../controllers/userController")
const eventController=require("../controllers/eventController")
const middleware=require("../middleware/authentication")


router.post("/register",userController.createUser)
router.post("/login",userController.loginUser)
router.post("/create-event",middleware.authentication,eventController.createEvent)
router.get("/get-event",middleware.authentication,eventController.getEvent)









module.exports=router