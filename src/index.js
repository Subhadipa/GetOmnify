const express=require("express")
const bodyParser=require("body-parser")
const _=require("underscore")
const app=express()
const route=require("./routes/route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const mongoose=require("mongoose")

let connection_string="mongodb+srv://Subhadipa:Subha2022@subhadipa-cluster.qy3xxtm.mongodb.net/calender-db?authSource=admin&replicaSet=atlas-iogo5c-shard-0&readPreference=primary&ssl=true"

mongoose.connect(connection_string,{useNewUrlParser:true})
        .then(()=>console.log("Mongoose is runnig on PORT 3000"))
        .catch((err)=>console.log(err))

app.use("/",route)

app.listen((process.env.PORT ||3000),function(){
          console.log("Express is running on PORT ",(process.env.PORT ||3000))

})

