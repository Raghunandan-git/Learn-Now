import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navstyle.css";
import {
  FaSearch, FaUser, FaBook, FaBell, FaAngleDown,
  FaSignOutAlt, FaCog, FaTrophy, FaChalkboardTeacher
} from "react-icons/fa";
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const { user } = useAuth();

  const profile = user || {
    name: 'Guest',
    email: 'guest@example.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  };

  const courses = [
    { name: "HTML", path: '/courses/htmlintro' },
    { name: "CSS", path: '/courses/cssintro' },
    { name: "Java", path: '/courses/javaintro' },
    { name: "JavaScript", path: '/courses/jsintro' },
    { name: "C++", path: '/courses/cppintro' },
    { name: "React", path: '/courses/reactintro' },
    { name: "Python", path: '/courses/pythonintro' },
    { name: "MySQL", path: '/courses/mysqlintro' },
    { name: "Bootstrap", path: '/courses/bootstrapintro' },
    { name: "MongoDB", path: '/courses/mongodbintro' },
    { name: "Tailwind CSS", path: '/courses/tailwindintro' },
    { name: "Node & Express ", path: '/courses/node-expressintro' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotification = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }

      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchQuery("");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = courses.filter(course =>
        course.name.toLowerCase().includes(query)
      );
      filtered.sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(query);
        const bStarts = b.name.toLowerCase().startsWith(query);
        return bStarts - aStarts;
      });

      setFilteredCourses(filtered);
    } else {
      setFilteredCourses([]);
    }
  };

  return (
    <nav className="navbar">
      {/* Search Bar */}
      <div className="navbar-search" ref={searchRef}>
        <FaSearch className="search-icon" size={15} />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery && (
          <div className="search-results">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <Link key={index} to={course.path} className="search-item">
                  {course.name}
                </Link>
              ))
            ) : (
              <p className="no-results">No courses found</p>
            )}
          </div>
        )}
      </div>

      {/* Right Side Icons and Profile */}
      <div className="nav-profile" ref={dropdownRef}>
        <ul>
          <li className="nav-link">
            <FaBell
              size={20}
              className="icon"
              color="orange"
              onClick={toggleNotification}
            />
            {isBoxOpen && (
              <div className="notification-box">
                <h3>No messages right now</h3>
              </div>
            )}
          </li>

          <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img
              src={profile.avatar}
              alt="avatar"
              className="dropdown-avatar"
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid indigo',
                background: '#eee',
              }}
              onClick={toggleDropdown}
            />
            <span
              className="dropdown-name"
              style={{ fontWeight: 600, color: 'indigo', cursor: 'pointer' }}
              onClick={toggleDropdown}
            >
              {profile.name}
            </span>
            <FaAngleDown color="black" style={{ cursor: 'pointer' }} onClick={toggleDropdown} />

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-user-summary">
                  <img
                    src={profile.avatar}
                    alt="avatar"
                    className="dropdown-avatar"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid indigo',
                      background: '#eee',
                      marginBottom: 8,
                    }}
                  />
                  <div style={{ textAlign: 'center', marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, color: '#4f1b83' }}>{profile.name}</div>
                    <div style={{ fontSize: '0.95rem', color: '#718096' }}>{profile.email}</div>
                  </div>
                  <hr style={{ margin: '8px 0', borderColor: '#e2e8f0' }} />
                </div>

                {/* Conditional Dashboard Link */}
                {user?.role === 'student' && (
                  <li><Link to="/dashboard" className="dropdown-li"><FaUser className="icon" color="indigo" size={15} /> Dashboard</Link></li>
                )}
                {user?.role === 'instructor' && (
                  <li><Link to="/instructor-dashboard" className="dropdown-li"><FaChalkboardTeacher className="icon" color="indigo" size={15} /> Dashboard</Link></li>
                )}

                <li>
                  <Link to="/courses" className="dropdown-li">
                    <FaBook className="icon" color="indigo" size={15} />My Courses
                  </Link>
                </li>

                {user?.role === 'student' && (
                  <li>
                    <Link to="/achievements" className="dropdown-li">
                      <FaTrophy className="icon" color="indigo" size={15} />Achievements
                    </Link>
                  </li>
                )}

                <li>
                  <Link to="/settings" className="dropdown-li">
                    <FaCog className="icon" color="indigo" size={15} />Settings
                  </Link>
                </li>

                <li>
                  <Link to="/logout" className="dropdown-li">
                    <FaSignOutAlt className="icon" color="indigo" size={15} />Log Out
                  </Link>
                </li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
