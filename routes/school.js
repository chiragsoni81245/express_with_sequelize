const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', function(req, res){
    res.send("<h1>All Schools</h1>");
})

router.post('/', async function(req, res){
    console.log("School Data->", req.body);
    await db.school.create(req.body);
    res.send({"status": "success"});
})

module.exports = router