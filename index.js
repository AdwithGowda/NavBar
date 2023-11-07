const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
const Student = require("./models/Student");
const faculty =require("./models/faculty");
require('./db')
app.get("/", (req, res) => {
    res.send("Hello world!....");
});
app.get("/student",async (req, res) => {
    try{
        const studentList = await Student.find();
        res.send(studentList);
    }catch(error){
        console.log(error);
    }
});
app.post("/student", async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const createStudent = new Student(data);
        await createStudent.save();
        res.send("Student created")
    } catch (error) {
        console.log(error);
    }
});
app.put("/student/:name", async (req, res) => {
    try {
        const studentName =req.params.name;
        await Student.updateOne({name:studentName},{$set : req.body});
        res.send("Student updated");
    } catch (error) {
        console.log(error);
    }
});
app.delete("/student/:name", async (req, res) => {
    try {
        const studentName =req.params.name;
        await Student.deleteOne({name:studentName},{$set : req.body});
        res.send("Student deleted");
    } catch (error) {
        console.log(error);
    }
});
app.get("/", (req, res) => {
    res.send("Hello world!....");
});
//faculty
app.get("/faculty",async (req, res) => {
    try{
        const facultyList = await faculty.find();
        res.send(facultyList);
    }catch(error){
        console.log(error);
    }
});
app.post("/faculty", async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const createfaculty = new faculty(data);
        await createfaculty.save();
        res.send("faculty created")
    } catch (error) {
        console.log(error);
    }
});
app.put("/faculty/:name", async (req, res) => {
    try {
        const facultyName =req.params.name;
        await faculty.updateOne({name:facultyName},{$set : req.body});
        res.send("faculty updated");
    } catch (error) {
        console.log(error);
    }
});
app.delete("/faculty/:name", async (req, res) => {
    try {
        const facultyName =req.params.name;
        await faculty.deleteOne({name:facultyName},{$set : req.body});
        res.send("faculty deleted");
    } catch (error) {
        console.log(error);
    }
});

//create a resource
//app.post()
app.listen(PORT, function () {
    console.log(`Server is running on localhost:${PORT}`);
});
