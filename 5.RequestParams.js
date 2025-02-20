import express from 'express'

const app = express();

app.get(`/hello/:user`, (req,res)=>{
  console.log(req.params.user);
  
  res.send(`hello ${req.params.user.toLocaleUpperCase()}`)
})

//!operaciones con la URL
app.get("/add/:x/:y" , (req,res)=>{
  const {x,y} = req.params
  res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

//!
app.get("/user/:username/photo",(req,res)=>{
  if (req.params.username === "fazt") {
      res.sendFile("", {
        root: __dirname
      })
  }
  req.send("el user no tiene acceso")
})

app.listen(3000);
console.log(`server port ${3000}`);
