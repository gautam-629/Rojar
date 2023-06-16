import { Router } from "express";
import { authController, activateController, userControler, refreshController } from "../controller";
import auth from "../middlewares/auth";
let router=Router();

router.post('/sendotp',authController.sendOtp);
router.post('/verifyotp',authController.verityOtp);
router.post('/activate',auth,activateController.activate)
router.post('/me',auth,userControler.me);
router.post('/refresh',refreshController.refresh);
router.post('/logout',auth,authController.logout)
export default router;