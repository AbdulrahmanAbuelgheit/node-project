import { Router } from "express";
import { loginForm } from "../controllers/doctor.js";
import { login2 } from "../controllers/doctor.js";

const router =new Router();

router.get('/login', loginForm);
router.post('/login', login2);
export default router;