import { Router } from "express";

const mp_router =new Router;

mp_router.get('/',(req,res)=>{
    res.render('home/home')
});

export default mp_router;