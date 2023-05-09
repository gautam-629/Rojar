import { Router } from "express";
import { authController, activateController } from "../controller";
let router=Router();

router.post('/sendotp',authController.sendOtp);
router.post('/activate',activateController.activate)

export default router;