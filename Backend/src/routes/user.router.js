import { Router } from "express";
import { Sendemail } from "../controllers/user.controller.js";
const router = Router();

router.route("/getin").post(Sendemail);

export default router;
