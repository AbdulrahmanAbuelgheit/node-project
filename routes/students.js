import { Router } from "express";

const st_router =new Router;

st_router.get('/',(req,res)=>{
    res.render('students/student')
});

export default st_router;