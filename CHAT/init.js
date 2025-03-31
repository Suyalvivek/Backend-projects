const mongoose = require("mongoose");
const Chat = require("./models/chat");
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Messenger').then(()=>{
    console.log("connected");
  });
}
let chats = [{
    from:"jetha",
    to:"goli",
    message:"beta masti nhi",
    created_at: new Date()
},
{
    from:"hathi",
    to:"jetha",
    message:"shi baat hai",
    created_at: new Date()
},
{
    from:"jetha",
    to:"bapuji",
    message:"jai jinendra",
    created_at: new Date()
},
{
    from:"bapuji",
    to:"jetha",
    message:"jai jinendra",
    created_at: new Date()
}]


Chat.insertMany(chats);
