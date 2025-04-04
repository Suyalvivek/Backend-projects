//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
function passwordCheck(req, res) {
    if (req.body.password === "") {
      res.status(400).send({ message: "Password is required" });
      return false; // Return false for missing password
    } else if (req.body.password === "ILoveProgramming") {
      return true; // Return true for correct password
    } else {
      res.status(401).send({ message: "Password is incorrect" });
      return false; // Return false for incorrect password
    }
  }
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (passwordCheck(req, res)) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.sendFile(__dirname + "/public/index.html");
    }
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  });
