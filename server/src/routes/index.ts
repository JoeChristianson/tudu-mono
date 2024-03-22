import express from "express";
import taskRouter from "./taskRoutes";
import resourcesRouter from "./resources";
import authRouter from "./authRoutes";
import categoryRouter from "./category";

const router = express.Router()

router.use("/auth",authRouter)
router.use("/tasks",taskRouter)
router.use("/resources",resourcesRouter)
router.use("/category",categoryRouter)
export default router