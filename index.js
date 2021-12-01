const express = require('express')
const app = express()
const { sequelize } = require('./models')
const port = 3000

const school_router = require('./routes/school');
const student_router = require('./routes/student');

app.use(express.json());
app.use('/api/school', school_router)
app.use('/api/student', student_router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    sequelize.sync({alter: true}); 
    // In production this will only be used for the initial schema creation 
    // but here is development database will be scyned everytime we restart application
    // {force: true} will drop every existing table first 
    // and create tables with new models.
    console.log("Database Synced!");
})