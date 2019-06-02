const express = require('express');
const courseRoutes = express.Router();
let Course = require('../models/Course');

courseRoutes.route('/add').post((req,res) => {
    let course = new Course(req.body);
    course.save().then(course => {
        res.status(200).send({data: course});
    }).catch( err => {
        res.status(400).send("Unable to insert data");
    });
});
courseRoutes.route('/courses').get((req,res) => {
    Course.find((err,course) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send({data: course});
        }
    });
});
courseRoutes.route('/:id').get((req,res) => {
    let id = req.params.id;
    Course.findById(id, (err,course) => {
        if(err){
            console.log(err);
        }
        else if(course.length > 0){
            res.status(200).send({data: course});
        }else{
            res.status(404).send({message: 'Not Found'});
        }
    });
});
module.exports = courseRoutes;