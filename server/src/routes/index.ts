import express from "express";
import taskRouter from "./taskRoutes";
import resourcesRouter from "./resources";
import authRouter from "./authRoutes";
import categoryRouter from "./category";
import generalRouter from "./general";
import iterativesRouter from "./iteratives";

const router = express.Router()

router.use("/auth",authRouter)
router.use("/tasks",taskRouter)
router.use("/resources",resourcesRouter)
router.use("/category",categoryRouter)
router.use("/general",generalRouter)
router.use("/iteratives",iterativesRouter)
export default router