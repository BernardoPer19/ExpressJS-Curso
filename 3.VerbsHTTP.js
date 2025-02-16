import express from 'express'

const app = express()
//& GET
app.get("/products",(req,res)=>{
    res.send("Listaaa de productos")
})

//& POST
app.post("/products",(req,res)=>{
    res.send("Añadiendo de productos")
})

//& PUT
app.put("/products",(req,res)=>{
    res.send("Actualizando productos")
})


//& DELETE
app.post("/products",(req,res)=>{
    res.send("Eliminando de productos")
})

//& PATCH
app.patch("/products",(req,res)=>{
    res.send("Actualiznado una poarte del producto")
})


app.listen(3000)
console.log(`server port ${3000}`);