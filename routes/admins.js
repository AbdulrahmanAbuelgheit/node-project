import { Router } from "express";
import departmentdb from "../models/departmentdb.js";
import subjectdb from "../models/subjectdb.js";
import department from '../models/departmentdb.js'
//import { create } from "../server.js";


const ad_router =new Router;

ad_router.get('/', async(req,res)=>{
    const departments=await department.find().lean()
    res.render('admins/admin',{departments})
    //department.find()
    //.then((result) => { console.log(result) })
    //.catch((err) => { console.log(err) });
});

export default ad_router;