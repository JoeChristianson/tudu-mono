import express from "express";
import taskRouter from "./taskRoutes";
import resourcesRouter from "./resources";
import authRouter from "./authRoutes";

const router = express.Router()

router.use("/auth",authRouter)
router.use("/tasks",taskRouter)
router.use("/resources",resourcesRouter)
export default router