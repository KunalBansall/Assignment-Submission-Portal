import express from "express";
import { body } from "express-validator";
import passport from "passport";
import { register, login, getAdmins, googleCallback, logout } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("role").isIn(["user", "admin"]),
  ],
  register
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").exists(),
  ],
  login
);

router.get("/admins", protect, getAdmins);

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login-failed" }), googleCallback);

router.get("/logout", logout);

export default router;
