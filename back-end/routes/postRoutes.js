import {} from '../controllers/postControllers';
import { authGuard } from '../middleware/authMiddleware';

import express from 'express';
const router = express.Router();

router.post("/");


export default router;