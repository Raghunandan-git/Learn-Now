import StudentCourse from '../models/StudentCourse.js';

// Register a student for a course
export const registerCourse = async (req, res) => {
  try {
    const { studentId, courseId, courseName, totalLessons, color } = req.body;
    const existing = await StudentCourse.findOne({ studentId, courseId });
    if (existing) return res.status(400).json({ message: 'Already registered' });

    const registration = new StudentCourse({ studentId, courseId, courseName, totalLessons, color });
    await registration.save();
    res.status(201).json(registration);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProgress = async (req, res) => {
  try {
    const { studentId, courseId, progress, completedLessons } = req.body;
    const updated = await StudentCourse.findOneAndUpdate(
      { studentId, courseId },
      { progress, completedLessons },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Registration not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const { studentId } = req.query;
    const courses = await StudentCourse.find({ studentId });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
