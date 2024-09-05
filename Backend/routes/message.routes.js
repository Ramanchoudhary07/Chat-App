import { Router } from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = Router();

router.post(`/send/:id`, protectedRoute, sendMessage);
router.get(`/:id`, protectedRoute, getMessage);

export default router;
