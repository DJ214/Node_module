const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.use(express.json()); // parses incoming requests with JSON payloads

const data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
// console.log(data)
let products = data.products
// console.log(products)


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/products',(req,res)=>{
    res.send(products)
})

app.get('/products/:id',(req,res)=>{
    // console.log(req.params);
    let id = req.params.id;
    // console.log(id)
    const product = products.find((obj)=>obj.id == id);
    // console.log(product)
    res.send(product)
})


app.post("/products",(req,res)=>{
    console.log(req.body);
    let product = req.body
    products.push(product)

    res.send("data added");
})


app.delete("/products/:id",(req,res)=>{
    const id = req.params.id;

    const ProductIndex = products.findIndex(obj=>obj.id == id);
    // console.log(ProductIndex)
    products.splice(ProductIndex,1); // splice will take two arg one will be index and other will be no of elements that need to be removed from that particular index
    // splice removes the element and it make changes in the original array
    // also if the id is not present by default it will delete the last element of the array
    res.send("data deleted");
})



app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})

