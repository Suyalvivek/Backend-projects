import express from "express";
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    const today = new Date();
    const day = today.getDay();
    let type = "a weekday";
    let adv = "work hard";
    if(day==0||day==6){
    let type = "the weekend";
    let adv = "have some fun";
    }
    res.render("index.ejs",{
        dayType:type,
        advice:adv
    })
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})