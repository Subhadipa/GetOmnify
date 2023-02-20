const userModel=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const exportFunction={

    createUser:async(req,res)=>{
        try{
        const userData=req.body
        const saltRounds = 10;
        const hasedPassword=await bcrypt.hash(userData.Password,saltRounds)
        const userDetails=await userModel.create({...userData,Password:hasedPassword})
        return res.status(200).send({status:true,message:"User registered successfully!" ,data:userDetails})
        }catch(error){
            return res.status(500).send({status:false,message:error.message})
        }

    },
    loginUser:async(req,res)=>{
        try{
        const {Email,Password}=req.body
        const userVerify=await userModel.findOne({Email})
        if(!userVerify){
            return res.status(400).send({status:false,message:"No user exist!"})
        }else{
            const passwordCompare=await bcrypt.compare(Password,userVerify.Password)
            if(passwordCompare){
               const generatedToken=jwt.sign({userId:userVerify._id},"subha")
                return res.status(200).send({
                    status:true,
                    message:userVerify["First Name"]+" "+userVerify["Last Name"]+" Logged in successfully",
                    userId:userVerify._id,
                    token:generatedToken
                })
            }
        }
    }catch(error){
        return res.status(500).send({status:false,message:error.message})
    }

    }

}




module.exports=exportFunction