import { Router } from "express";
import subjects from "../models/subjectdb.js";
const su_router =new Router;

su_router.get('/', async(req,res)=>{
    const subject=await subjects.find().lean()
    res.render('subjects/subject',{subject})
});

export default su_router;