import express from "express";
import { login, logout, register, updateProfile, userProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";
import multer from "multer";

const upload = multer();
 
const router = express.Router();

// router.route("/register").post(singleUpload,register);
router.route("/register").post(upload.single("img"),register);
router.route("/login").post(upload.none(),login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);
router.route("/profile").get(isAuthenticated, userProfile);

export default router;
