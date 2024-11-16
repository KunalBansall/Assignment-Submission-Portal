import express from 'express';
import { body } from 'express-validator';
import { protect } from '../middleware/auth.middleware.js';
import { uploadAssignment } from '../controllers/assignment.controller.js';

const router = express.Router();

router.post('/upload', [
  protect,
  body('task').notEmpty(),
  body('adminId').notEmpty()
], uploadAssignment);

export default router;