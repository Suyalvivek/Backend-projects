import express from "express"
const app = express();
const  PORT = 3000;
app.get('/',(req,res)=>{
    res.send("<h1>hello people</h1>");
})
app.post('/register',(req,res)=>{
    res.sendStatus(201);
})
app.put('/user/vivek',(req,res)=>{
    res.sendStatus(200);
})
app.patch('/user/vivek',(req,res)=>{
    res.sendStatus(200);
})
app.delete('/user/vivek',(req,res)=>{
    res.sendStatus(200);
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})