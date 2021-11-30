const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/', function(req, res){
    res.send("<h1>All Studented</h1>");
})

router.post('/:schoolId', async function(req, res){
    console.log("Student Data->", req.body);
    await db.student.create({...req.body, schoolId: req.params.schoolId});
    res.send({"status": "success"});
})


module.exports = router