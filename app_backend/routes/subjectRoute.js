const express = require('express');
const subjectRoutes = express.Router();
let Subject = require('../models/Subject');

subjectRoutes.route('/add').post((req,res) => {
    let subject = new Subject(req.body);
    subject.save().then(subject => {
        res.status(200).send({id: subject._id});
    }).catch(err => {
        res.status(400).send("Unable to insert data");
    });
});
subjectRoutes.route('/subjects').get((req,res) => {
    Subject.find((err,subject) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send({subject: subject});
        }
    });
});

module.exports = subjectRoutes;