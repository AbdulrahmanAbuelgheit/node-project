import { Router } from "express";
import { loginForm } from "../controllers/user.js";
import { login } from "../controllers/user.js";

const router =new Router();

router.get('/login', loginForm);
router.post('/login', login);
export default router;