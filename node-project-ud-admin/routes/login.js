import { Router } from "express";

const lo_router =new Router;

lo_router.get('/',(req,res)=>{
    res.render('logins/login')
});

export default lo_router;