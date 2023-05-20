import { Router } from "express";
import departmentdb from "../models/departmentdb.js";
import subjects from "../models/subjectdb.js";
import department from '../models/departmentdb.js';
import doctorAccountdb from '../models/doctorAccountdb.js';
import studentAccountdb from '../models/studentAccountdb.js';

const ad_router = new Router;
ad_router.get('/', async(req, res) => {
    const departments = await department.find().lean()
    res.render('admins/admin', { departments })
});

// update 
ad_router.get('/subjects', async(req, res) => {
    const subjects_list = await subjects.find().lean()
    res.render('admins/subjects/list', { subjects_list })
});

ad_router.get('/subjects/:id', async(req, res) => {
    let id = req.params.id;
    const subject = await subjects.findOne({ _id: id });
    res.render('admins/subjects/edit', subject)
});

ad_router.post('/subjects/update/:id', async(req, res) => {
    let id = req.params.id;
    const subject = await subjects.findOne({ _id: id });
    subject.name = req.body.name || subject.name;
    subject.code = req.body.code || subject.code;
    subject.department = req.body.department || subject.department;
    await subject.save();
    res.render('admins/subjects/edit', subject)
});

ad_router.get('/departments', async(req, res) => {
    const departments_list = await department.find().lean()
    res.render('admins/departments/list', { departments_list })
});

ad_router.get('/departments/:id', async(req, res) => {
    let id = req.params.id;
    const departments = await department.findOne({ _id: id });
    res.render('admins/departments/edit', departments)
});
ad_router.post('/departments/update/:id', async(req, res) => {
    let id = req.params.id;
    const departments = await department.findOne({ _id: id });
    departments.name = req.body.name || departments.name;
    departments.code = req.body.code || departments.code;
    await departments.save();

    res.render('admins/departments/edit', departments)
});
ad_router.get('/doctors', async(req, res) => {
    const doctors_list = await doctorAccountdb.find().lean()
    res.render('admins/doctors/list', { doctors_list })
});
ad_router.get('/doctors/:id', async(req, res) => {
    let id = req.params.id;
    const doctors = await doctorAccountdb.findOne({ _id: id });
    res.render('admins/doctors/edit', doctors)
});
ad_router.post('/doctors/update/:id', async(req, res) => {
    let id = req.params.id;
    const doctors = await doctorAccountdb.findOne({ _id: id });
    doctors.username = req.body.username || doctors.username;
    doctors.email = req.body.email || doctors.email;
    doctors.password = req.body.password || doctors.password;
    await doctors.save();

    res.render('admins/doctors/edit', doctors)
});
ad_router.get('/students', async(req, res) => {
    const students_list = await studentAccountdb.find().lean()
    res.render('admins/students/list', { students_list })
});
ad_router.get('/students/:id', async(req, res) => {
    let id = req.params.id;
    const students = await studentAccountdb.findOne({ _id: id });
    res.render('admins/students/edit', students)
});
ad_router.post('/students/update/:id', async(req, res) => {
    let id = req.params.id;
    const students = await studentAccountdb.findOne({ _id: id });
    students.username = req.body.username || students.username;
    students.password = req.body.password || students.password;
    students.acadimicNumber = req.body.acadimicNumber || students.acadimicNumber;
    await students.save();

    res.render('admins/students/edit', students)
});


//delete
ad_router.get('/subjects/delete/:id', async(req, res) => {
    let id = req.params.id;
    const sub = await subjects.findOneAndDelete({ _id: id });

    const subjects_list = await subjects.find().lean()
    res.render('admins/subjects/list', { subjects_list })
})
ad_router.get('/departments/delete/:id', async(req, res) => {
    let id = req.params.id;
    const depart = await department.findOneAndDelete({ _id: id });

    const departments_list = await department.find().lean()
    res.render('admins/departments/list', { departments_list })
});

ad_router.get('/doctors/delete/:id', async(req, res) => {
    let id = req.params.id;
    const doc = await doctorAccountdb.findOneAndDelete({ _id: id });

    const doctors_list = await doctorAccountdb.find().lean()
    res.render('admins/doctors/list', { doctors_list })
});
ad_router.get('/students/delete/:id', async(req, res) => {
    let id = req.params.id;
    const doc = await studentAccountdb.findOneAndDelete({ _id: id });

    const students_list = await studentAccountdb.find().lean()
    res.render('admins/students/list', { students_list })
});
export default ad_router;