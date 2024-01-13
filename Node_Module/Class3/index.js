const mongoose = require("mongoose");

const password = "RgnWSMoi2Olcc5ni";

const db = `mongodb+srv://jaindeepanshu21:${password}@cluster0.dv8ua7r.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(db)
.then(()=>{
    console.log("Connection Established")
})
.catch((err)=>{
    console.log(err)
})
