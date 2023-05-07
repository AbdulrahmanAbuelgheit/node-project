import { Router } from "express";
import departmentdb from "../models/departmentdb.js";
import subjectdb from "../models/subjectdb.js";

const ad_router =new Router;

ad_router.get('/',(req,res)=>{
    res.render('admins/admin')
});

ad_router.get('/create_dept', async (req,res)=>{
    await departmentdb.create({
        name :'operation',
        code:'or'
    });
    res.send('Added');
})

export default ad_router;