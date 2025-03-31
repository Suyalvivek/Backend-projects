//IMPORTS
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

//EJS
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//MONGO CONNECTION
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Messenger').then(()=>{
    console.log("connected");
  });
}
// let chat1 = new Chat({
//     from:"vivek",
//     to:"vinod",
//     message:"hi",
//     created_at: new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
//ROUTES
app.get("/chats",async(req,res)=>{
let chats = await Chat.find();
// console.log(chats);
// res.send("working");
res.render("index.ejs",{chats})
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})


app.get("/",(req,res)=>{
    res.send("hi ");
})
app.post("/chats",(req,res)=>{
    let {from,to,message} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        message:message,
        created_at: new Date()
    });
    console.log(newChat);
    newChat.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
})
//EDIT ROUTE
app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);

    res.render("edit.ejs",{chat});
})
//UPDATE ROUTE
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {message:newMessage} = req.body;
    console.log(newMessage);
    let updatedChat = await Chat.findByIdAndUpdate(id,{message:newMessage},{runValidators:true,new:true});
    console.log(updatedChat);
    res.redirect("/chats");
});

//DELETE ROUTE
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");

});


//LISTEN
app.listen(PORT,()=>{
    console.log(`APP is listening on port ${PORT}`);
})