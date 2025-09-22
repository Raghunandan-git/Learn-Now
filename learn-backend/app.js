import express from 'express';
import cors from 'cors';

import authRoutes from './source/routes/authRoutes.js';
import studentCourseRoutes from './source/routes/studentCourseRoutes.js';

const app = express();

app.use(cors());  
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/student', studentCourseRoutes);

export default app;
