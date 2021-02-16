import express from "express";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const classes = ["warrior", "mage", "ranger"];

app.get("/newClass", (req, res) => {
  const index = Math.floor(Math.random() * Math.floor(3));
  console.log(index);
  const yourNewClass = classes[index];
  res.send(yourNewClass);
});

app.listen(3000);
console.log("backend started");
