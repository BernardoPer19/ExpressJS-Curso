import express from "express";
const morgan = require('morgan')

const app = express();

app.use(morgan("dev"))

app.use((req,res,next)=>{
  console.log(`Route: ${req.url} Method: ${req.method}`);
  next()
})
app.get("/profile" , (req,res)=>{
  res.send("profile page")
})

app.get("/about", (req,res)=>{
  res.send("about page")
})

app.use((req,res,next)=>{
  if (req.query.login === "a") {
    next()
  }else{
    res.send("no autorizado")
  }
})

app.get("/dashboard",(req,res)=>{
  res.send("dashboar page")
})

app.listen(3000);
console.log(`server port ${3000}`);
