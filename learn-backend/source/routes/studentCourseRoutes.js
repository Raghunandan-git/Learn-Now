import express from 'express';
import { registerCourse, updateProgress, getCourses } from '../controllers/studentCourseController.js';

const router = express.Router();

router.post('/register', registerCourse);
router.post('/progress', updateProgress);
router.get('/courses', getCourses);

export default router;
