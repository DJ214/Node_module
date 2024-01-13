const express = require("express");

// console.log(express);

const app = express();

const PORT = 8080;

//Built-in Middlewares
app.use(express.static('public')) // --> It will serve index.html file only, even if we change the name of file it wont work
// by default built-in middlewares will serve the static files


// // I want to create a logger middleware here
// app.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname,new Date());
//     next();
// })

// Creating authorization middleware
const auth = (req,res,next)=>{
    console.log(req.query)
    let password = req.query.password;
    if(password == '123'){
        next();
    }else{
        res.send("You are not authorized person")
    }
}

// app.use(auth); // app.use method is used to invoke middlewares


// Route Level Middlewares

//endpoint --> the url on which we wait for response is known as endpoint
 app.get("/users/:id", auth, (req,res)=>{
    console.log(req.params);
    // res.send("Hello World")
    // res.send("<h1>Hello World in h1 heading</h1>")
    // res.send({"name" : "Deepanshu"})
    res.send({'type' : "GET"});
})

app.post("/",(req,res)=>{
    res.send({'type' : "POST"});
})

app.put("/",(req,res)=>{
    res.send({'type' : "PUT"});
})

app.delete("/",(req,res)=>{
    res.send({'type' : "DELETE"});
})




app.listen(PORT,()=>{
    console.log(`Server has started at ${PORT}`)

})