import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv'
dotenv.config();
//import bcrypt from bcrypt.js;
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

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
import authRoutes from './routes/auth.js';
import authdoc from './routes/authdoc.js';
import bodyParser from 'body-parser';
import studentAccountdb from './models/studentAccountdb.js';
import { login2 } from './controllers/doctor.js';
// import { login ,loginForm} from './controllers/user.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(bcrypt());
app.use(express.urlencoded({ extended: false }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/students', studentsRouter)
app.use('/doctors', doctorsRouter)
app.use('/admins', adminsRouter)
app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/subjects', subjectsRouter)

app.use('/', authRoutes)
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
        .then((result) => { res.redirect('/admins/departments') })
        .catch((err) => { console.log(err) });
});
app.post('/doctors', (req, res) => {
    const doctoraccount = new doctorAccount(req.body);
    doctoraccount
        .save()
        .then((result) => { res.redirect('/admins/doctors') })
        .catch((err) => { console.log(err) });
});
app.post('/students', (req, res) => {

    const studentaccount = new studentAccount(req.body);
   
    studentaccount.save()
        .then((result) => { res.redirect('/admins/students') })
        .catch((err) => { console.log(err) });
});
app.post('/subjects', (req, res) => {
    const subjectt = new subjects(req.body);
    subjectt.save()
        .then((result) => { res.redirect('/admins/subjects') })
        .catch((err) => { console.log(err) });
});
app.use('/',authdoc)
// app.post('/login',async (req,res) => {
//     const username=req.body.username
//     const password=req.body.password
//   const loggedstudent =  await studentAccountdb.findOne({username});
//   const isCorrectPassword=await studentAccountdb.findOne({password});
//   const isCorrectPassword= bcrypt.compareSync(
//       password,
//       loggedstudent.password,
//   );
//   if(!isCorrectPassword){
//       return res.send('hkhkjlfjewklfj');
//       }else{

//         return res.send("jjjjjj")
//       }
//       const data= {
//           _id: loggedstudent._id,
//          username: loggedstudent.username,

//       };
      
//      const jwtToken = jwt.sign(data, process.env.JWT_SECRET);
//      console.log(jwtToken);

    
//   res.cookie('token',jwtToken); 
//   res.send('loggin')
// });