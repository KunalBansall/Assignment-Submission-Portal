import Assignment from '../models/assignment.model.js';

export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ adminId: req.user._id })
      .populate('userId', 'name email')
      .sort('-createdAt');
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const acceptAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findOne({
      _id: req.params.id,
      adminId: req.user._id
    });

    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    assignment.status = 'accepted';
    await assignment.save();

    res.json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const rejectAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findOne({
      _id: req.params.id,
      adminId: req.user._id
    });

    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }

    assignment.status = 'rejected';
    await assignment.save();

    res.json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};