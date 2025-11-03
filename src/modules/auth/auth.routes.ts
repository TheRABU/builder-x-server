import { Router } from "express";
import { AuthController } from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/login", AuthController.credentialsLogin);
authRoutes.post("/logout", AuthController.logOut);

export default authRoutes;
