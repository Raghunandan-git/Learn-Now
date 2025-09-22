import mongoose from 'mongoose';

const StudentCourseSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  progress: { type: Number, default: 0 },
  completedLessons: { type: Number, default: 0 },
  totalLessons: { type: Number, required: true },
  color: { type: String },
});

const StudentCourse = mongoose.model('StudentCourse', StudentCourseSchema);
export default StudentCourse;
