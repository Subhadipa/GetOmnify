const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {

    "First Name":{
        type:String,
        require:true
    },
    "Last Name":{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
},
{timestamps:true}

)

module.exports=mongoose.model("User Detail",userSchema)