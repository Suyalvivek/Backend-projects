import { log } from "console";
import express from "express";
const app = express();
const port = 3000;
function logger(req,res,next){
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log(req.params);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.ip);
  console.log(req.protocol);
  console.log(req.path);
  console.log(req.originalUrl);
  console.log(req.baseUrl);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
