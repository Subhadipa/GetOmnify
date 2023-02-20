const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId
const eventSchema=new mongoose.Schema(
    {

     Name:{
        type:String,
        require:true
    },
    Description:{
        type:String,
        require:true
    },
    user_id:{
        type:ObjectId,
        require:true,
        ref:"User Detail"
    },
    "Start Time":{
        type:String,
    },
    "End Time":{
        type:String,
     },
    Day:{
        type:String,
        require:true
    }
},
{timestamps:true}

)

module.exports=mongoose.model("Event Detail",eventSchema)