import { Request, Response } from "express"
import path from 'path'
import Jimp from 'jimp';
import { activateScheme } from "../../validators/validators";
import userModels from "../../models/userModels";
import CustomErrorHandler from "../../services/customErrorHandler";
const activateController = {
    async activate(req: Request, res: Response, next: any) {
        const { name, avatar } = req.body;
        //validate the request
        try {
            let result = await activateScheme.validateAsync(req.body);
        } catch (error) {
            return next(error);
        }
        const buffer = Buffer.from(
            avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
            "base64"
        );
        const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;
        // 32478362874-3242342342343432.png

        try {
            const jimResp = await Jimp.read(buffer);
            jimResp
                .resize(150, Jimp.AUTO)
                .write(path.resolve(__dirname, `../../storage/${imagePath}`));
        } catch (err) {
            return next(err);
        }
        try {
            const user = await userModels.findOne({ _id: req.currentUser?._id });
            if (!user) {
                return next(CustomErrorHandler.notFound('User not found!'));
            }
            user.activated = true;
            user.name = name;
            user.avatar = `/storage/${imagePath}`;
            user.save();

            res.json({
                user: user,
                auth: true
            })
        } catch (error) {
            return next(error);
        }
    }
}

export default activateController;