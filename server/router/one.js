let express=require("express")
let router=express.Router()
let oneData=require("../mock/one.json")


router.get("/data",(req,res)=>{
    res.send({chartData:oneData})
})

module.exports=router