import { Router } from "express";
import { authController, activateController, userControler } from "../controller";
import auth from "../middlewares/auth";
let router=Router();

router.post('/sendotp',authController.sendOtp);
router.post('/verifyotp',authController.verityOtp);
router.post('/activate',activateController.activate)
router.post('/me',auth,userControler.me);

export default router;