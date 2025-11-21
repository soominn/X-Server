import express from "express";
import * as authController from "../controller/auth.mjs"

const router = express.Router();

// 회원가입
// 127.0.0.1/auth/signup
router.post("/signup", authController.signup);

// 로그인
// 127.0.0.1/auth/login
router.post("/login", authController.login);

// 로그인 유지

export default router;