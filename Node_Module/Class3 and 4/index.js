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

//Schema

const courseSchema = new mongoose.Schema({
    name:String,
    creator:String,
    publishedDate:{type:Date,default:Date.now},
    isPublished:Boolean,
    rating:Number
})

// Model

const Course = mongoose.model('Course',courseSchema)

//CRUD
async function createCourse(){
    const course = new Course({
        name:"C++",
        creator:"XYZ",
        isPublished:true,
        rating:3.8

    })
    const courseCreated = await course.save()
}

// createCourse();
//operators
// $lt
//gte
//lte
//gt
// in
// not in


async function getCourse(){
    // const course = await Course.find({rating:{$lte:3.5}});
    const course = await Course.findById("65a3dc737915589c07aa3d75")
    console.log(course);
}

// getCourse();

async function updateCourse(id){
    let course = await Course.findById(id);
    if (!course){
        return
    }
    course.name ="Scala",
    course.creator = "Carey"
    const updatedCourse = await course.save();
    console.log(updatedCourse)
}

// updateCourse("65a3dcebe7faafe4dd561233");

async function deleteCourse(id){
    const deletedCourse = await Course.findByIdAndDelete(id);
    console.log(deletedCourse)
}

deleteCourse("65a3e273497cc1e3a344cfcd");