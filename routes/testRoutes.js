import express from "express";
import { testPostController } from "../controller/textController.js";

const router = express.Router();

router.post("/test",testPostController);

export default router;
