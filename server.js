import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.mongoUrl);

import studentsRouter from './routes/students.js';
import doctorsRouter from './routes/doctors.js';
import adminsRouter from './routes/admins.js';
import homeRouter from './routes/home.js';
import loginRouter from './routes/login.js';
import subjectsRouter from './routes/subjects.js';


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/students',studentsRouter)
app.use('/doctors',doctorsRouter)
app.use('/admins',adminsRouter)
app.use('/',homeRouter)
app.use('/login',loginRouter)
app.use('/subjects',subjectsRouter)

app.listen(process.env.port,()=>{
    console.log(`The Application Started on http://localhost:${process.env.port}`);
});