import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { 
  FaBook, 
  FaChartLine, 
  FaClock, 
  FaTrophy, 
  FaPlay, 
  FaCheckCircle, 
  FaUserGraduate,
  FaCalendarAlt,
  FaStar,
  FaArrowRight,
  FaBookOpen,
  FaCertificate
} from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  // Fetch registered courses and progress for the logged-in student
  const [courseProgress, setCourseProgress] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    if (user?.role === 'student') {
      fetch(`/api/student/courses?studentId=${user._id}`)
        .then(res => res.json())
        .then(data => {
          setCourseProgress(data);
          setLoadingCourses(false);
        })
        .catch(() => setLoadingCourses(false));
    }
  }, [user]);

  const [recentActivities] = useState([
    { id: 1, type: 'lesson', title: 'Completed HTML Forms lesson', time: '2 hours ago', icon: FaCheckCircle },
    { id: 2, type: 'quiz', title: 'Scored 85% on CSS Quiz', time: '1 day ago', icon: FaTrophy },
    { id: 3, type: 'course', title: 'Started JavaScript Basics', time: '2 days ago', icon: FaPlay },
    { id: 4, type: 'achievement', title: 'Earned HTML Expert badge', time: '3 days ago', icon: FaStar }
  ]);

  const [stats] = useState({
    totalCourses: 12,
    completedCourses: 2,
    totalHours: 24,
    currentStreak: 7,
    certificates: 1
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = currentTime.getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, [currentTime]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>{greeting}, {user?.name || 'Learner'}! 👋</h1>
          <p className="subtitle">Ready to continue your learning journey?</p>
          <div className="time-info">
            <FaClock className="time-icon" />
            <span>{formatTime(currentTime)} • {formatDate(currentTime)}</span>
          </div>
        </div>
        <div className="quick-stats">
          <div className="stat-card">
            <FaUserGraduate className="stat-icon" />
            <div>
              <h3>{stats.currentStreak}</h3>
              <p>Day Streak</p>
            </div>
          </div>
          <div className="stat-card">
            <FaBookOpen className="stat-icon" />
            <div>
              <h3>{stats.totalHours}</h3>
              <p>Hours Learned</p>
            </div>
          </div>
          <div className="stat-card">
            <FaCertificate className="stat-icon" />
            <div>
              <h3>{stats.certificates}</h3>
              <p>Certificates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Course Progress Section */}
        <div className="dashboard-card course-progress">
          <div className="card-header">
            <h2><FaBook className="card-icon" /> My Courses</h2>
            <Link to="/courses" className="view-all">View All <FaArrowRight /></Link>
          </div>
          <div className="progress-list">
            {loadingCourses ? (
              <div>Loading your courses...</div>
            ) : courseProgress.length === 0 ? (
              <div>You are not registered for any courses.</div>
            ) : (
              courseProgress.map(course => (
                <div key={course.id} className="progress-item">
                  <div className="progress-info">
                    <h4>{course.name}</h4>
                    <p>{course.completedLessons}/{course.totalLessons} lessons completed</p>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar" 
                      style={{ 
                        width: `${course.progress}%`,
                        backgroundColor: course.color || '#4ecdc4'
                      }}
                    ></div>
                    <span className="progress-text">{course.progress}%</span>
                  </div>
                  <Link to={`/courses/${course.name.toLowerCase().replace(/\s+/g, '')}`} className="continue-btn">
                    Continue
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="dashboard-card recent-activities">
          <div className="card-header">
            <h2><FaClock className="card-icon" /> Recent Activities</h2>
          </div>
          <div className="activities-list">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  <activity.icon />
                </div>
                <div className="activity-content">
                  <h4>{activity.title}</h4>
                  <p>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card quick-actions">
          <div className="card-header">
            <h2><FaPlay className="card-icon" /> Quick Actions</h2>
          </div>
          <div className="actions-grid">
            <Link to="/courses" className="action-card">
              <FaBook className="action-icon" />
              <h4>Browse Courses</h4>
              <p>Explore new topics</p>
            </Link>
            <Link to="/assignments" className="action-card">
              <FaCheckCircle className="action-icon" />
              <h4>My Assignments</h4>
              <p>View pending tasks</p>
            </Link>
            <Link to="/profile" className="action-card">
              <FaUserGraduate className="action-icon" />
              <h4>My Profile</h4>
              <p>Update settings</p>
            </Link>
            <Link to="/courses" className="action-card">
              <FaTrophy className="action-icon" />
              <h4>Achievements</h4>
              <p>View badges</p>
            </Link>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="dashboard-card learning-stats">
          <div className="card-header">
            <h2><FaChartLine className="card-icon" /> Learning Statistics</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{stats.totalCourses}</div>
              <div className="stat-label">Total Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.completedCourses}</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{Math.round((stats.completedCourses / stats.totalCourses) * 100)}%</div>
              <div className="stat-label">Completion Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.totalHours}h</div>
              <div className="stat-label">Total Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="dashboard-bottom">
        <div className="motivational-card">
          <div className="motivation-content">
            <h3>Keep up the great work! 🚀</h3>
            <p>You're making excellent progress. Continue learning and unlock new achievements.</p>
            <Link to="/courses" className="cta-button">
              Start Learning Now
            </Link>
          </div>
          <div className="motivation-illustration">
            <FaUserGraduate size={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
