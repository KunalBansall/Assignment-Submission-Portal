import { validationResult } from 'express-validator';
import Assignment from '../models/assignment.model.js';

export const uploadAssignment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { task, adminId } = req.body;
    
    const assignment = await Assignment.create({
      userId: req.user._id,
      adminId,
      task
    });

    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};