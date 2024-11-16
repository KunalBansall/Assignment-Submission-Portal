import express from 'express';
import { protect, admin } from '../middleware/auth.middleware.js';
import { 
  getAssignments, 
  acceptAssignment, 
  rejectAssignment 
} from '../controllers/admin.controller.js';

const router = express.Router();

router.use(protect);
router.use(admin);

router.get('/assignments', getAssignments);
router.post('/assignments/:id/accept', acceptAssignment);
router.post('/assignments/:id/reject', rejectAssignment);

export default router;