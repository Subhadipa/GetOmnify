const jwt=require("jsonwebtoken")

module.exports.authentication=async(req,res,next)=>{
    try{
        let authToken=req.headers['authorization']
        if(!authToken){
            return res.status(401).send({status:false,message:"Mandatory header is missing!"})

        }
        else{
            let decodeToken=jwt.verify(authToken,"subha")
            if(decodeToken){
                req.userId=decodeToken.userId
                next()
            }else{
                return res.status(401).send({ status: false, message: "The token is invalid!" });
            }
        }

    }catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}