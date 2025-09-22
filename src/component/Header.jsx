//Header.jsx
import React, { useEffect, useRef, useState } from 'react';
import logo from '../glow mind.png'
import { useAuth } from '../context/AuthContext'; 
import { Link } from 'react-router-dom'
import { FaAngleDown, FaBook, FaCog, FaHome, FaInfoCircle, FaSearch, FaSignOutAlt, FaUser, FaChalkboardTeacher} from 'react-icons/fa'
export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
const { user, logout } = useAuth();
const toggleDropdown = () => setIsOpen(!isOpen);
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
  
  const handleSearch = (e) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);
  
      if (query) {
        const filtered = courses.filter(course => course.name.toLowerCase().includes(query));
        filtered.sort((a, b) => {
          const aStartsWith = a.name.toLowerCase().startsWith(query);
          const bStartsWith = b.name.toLowerCase().startsWith(query);
          return bStartsWith - aStartsWith;
        });
  
        setFilteredCourses(filtered);
      } else {
        setFilteredCourses([]);
      }
    };
   useEffect(() => {
       const handleClickOutside = (event) => {
        
         if (searchRef.current && !searchRef.current.contains(event.target)) {
           setSearchQuery("");
         }
       };
   
       document.addEventListener("click", handleClickOutside);
   
       return () => {
         document.removeEventListener("click", handleClickOutside);
       };
     }, []);
  return (
    <>
      <div className='header'>
        <img src={logo} alt="logo" height={40} width={40} />
        <h1>Glow  Mind</h1>

        <div className="navbar-search" ref={searchRef}>
                <FaSearch className="search-icon" size={15} />
                <input
                  type="text"
                  id="search"
                  name="search"
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

        <div className="navbar-links">
                <ul>
                    <Link to="/" className="nav-link">
                  <li>
                      <h3><FaHome className="icon" /> Home</h3>
                  </li>
                    </Link>
                    <Link to="/courses" className="nav-link">
                  <li>
                      <h3><FaBook className="icon" /> Courses</h3>
                  </li>
                    </Link>
                    <Link to="/about" className="nav-link">
                  <li>
                      <h3><FaInfoCircle className='icon'/>About</h3>
                  </li>
                    </Link>
                </ul>
              </div>
        <div className="header-btn">
        {user ? (
          <>
            <FaAngleDown color="black" />
            <FaUser size={20} className="profile" onClick={toggleDropdown} />
            {isOpen && (
              <div className="dropdown-menu">
                {user?.role === 'student' && (
  <li><Link to="/dashboard" className="dropdown-li"><FaUser className="icon" color="indigo" size={15} /> Dashboard</Link></li>
)}
{user?.role === 'instructor' && (
  <li><Link to="/instructor-dashboard" className="dropdown-li"><FaChalkboardTeacher className="icon" color="indigo" size={15} /> Dashboard</Link></li>
)}
                <li><Link to="/courses" className="dropdown-li"><FaBook className="icon" color="indigo" size={15} /> My Courses</Link></li>
                {user?.role === 'instructor' && (
                  <li><Link to="/instructor-dashboard" className="dropdown-li"><FaChalkboardTeacher className="icon" color="indigo" size={15} /> Instructor Dashboard</Link></li>
                )}
                <li><Link to="/settings" className="dropdown-li"><FaCog className="icon" color="indigo" size={15} /> Settings</Link></li>
                <li>
  <a
    href="#logout"
    onClick={e => {
      e.preventDefault();
      logout();
      setIsOpen(false);
    }}
    className="dropdown-li logout-btn"
  >
    <FaSignOutAlt className="icon" color="indigo" size={15} /> Log Out
  </a>
</li>
              </div>
            )}
          </>
        ) : (
          <>
            <Link to='/login' className='login-btn'><h3 id='login'>Login</h3></Link>
            <Link to='/signup'><button>Sign up</button></Link>
          </>
        )}
      </div>
      </div>

    </>
  )
}
