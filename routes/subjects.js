import { Router } from "express";

const su_router =new Router;

su_router.get('/',(req,res)=>{
    res.render('subjects/subject')
});

export default su_router;