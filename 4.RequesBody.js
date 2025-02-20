import express from "express";

const app = express();
app.use(express.text())
app.use(express.json())


app.post("/user", (req, res) => {
  console.log(req.body);
  
  res.send("new user")
});

app.listen(3000);
console.log(`server port ${3000}`);
