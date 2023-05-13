import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose';

import department from './models/departmentdb.js'
import doctorAccount from './models/doctorAccountdb.js'
import studentAccount from './models/studentAccountdb.js'
import subjects from './models/subjectdb.js'

import studentsRouter from './routes/students.js';
import doctorsRouter from './routes/doctors.js';
import adminsRouter from './routes/admins.js';
import homeRouter from './routes/home.js';
import loginRouter from './routes/login.js';
import subjectsRouter from './routes/subjects.js';
import ad_router from './routes/admins.js';
import departmentdb from './models/departmentdb.js';
import subjectdb from './models/subjectdb.js';


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/students', studentsRouter)
app.use('/doctors', doctorsRouter)
app.use('/admins', adminsRouter)
app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/subjects', subjectsRouter)

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.mongoUrl).then((result) => {
    app.listen(process.env.port, () => {
        console.log(`The Application Started on http://localhost:${process.env.port}`);
    });
}).catch((err) => {
    console.log(err);
})

app.post('/admins', (req, res) => {
    const departmentt = new department(req.body);
    departmentt.save()
        .then((result) => { res.redirect('/admins') })
        .catch((err) => { console.log(err) });
});
app.post('/doctors', (req, res) => {
    const doctoraccount = new doctorAccount(req.body);
    doctoraccount
        .save()
        .then((result) => { res.redirect('/doctors') })
        .catch((err) => { console.log(err) });
});
app.post('/students', (req, res) => {
    const studentaccount = new studentAccount(req.body);
    studentaccount.save()
        .then((result) => { res.redirect('/students') })
        .catch((err) => { console.log(err) });
});
app.post('/subjects', (req, res) => {
    const subjectt = new subjects(req.body);
    subjectt.save()
        .then((result) => { res.redirect('/subjects') })
        .catch((err) => { console.log(err) });
});

