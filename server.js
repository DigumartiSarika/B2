const express=require("express")
const app= express()
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/aidsc")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((e)=>{
    console.log(`error is ${e}`)
})
app.listen(1234,()=>{
    console.log("server is running at http://localhost:1234")
})