const { isUtf8 } = require("buffer");
const fs = require("fs");
// fs.writeFile("message.txt","hello",(err)=>{
//     if(err) throw err;
//     console.log("file created");
// })
fs.readFile('./message.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  