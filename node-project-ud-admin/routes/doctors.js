import { Router } from "express";

const do_router =new Router;

do_router.get('/',(req,res)=>{
    res.render('doctors/doctor')
});

export default do_router;