//Html.jsx
import React, { useState, useEffect } from 'react'
import '../styles/card.css'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

export default function Html({buttontext}) {
  const { user } = useAuth();
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if already registered for HTML course
  useEffect(() => {
    if (!user || user.role !== 'student') return;
    fetch(`/api/student/courses?studentId=${user._id}`)
      .then(res => res.json())
      .then(courses => {
        const isRegistered = courses.some(course => course.courseId === 'html');
        setRegistered(isRegistered);
      })
      .catch(() => setRegistered(false));
  }, [user]);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/student/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: user._id,
          courseId: 'html',
          courseName: 'HTML:Beginner to advanced',
          totalLessons: 20, // Set actual number
          color: '#ff6b6b'
        })
      });
      const data = await res.json();
      console.log('Register response:', res.status, data);
      setLoading(false);
      if (res.ok) {
        setRegistered(true);
        alert('Registered successfully!');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      setLoading(false);
      alert('Network error');
    }
  };

  return (
    <>
    <div className="card">
     <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" alt="html" height={150} width={200}/>
     <h3>HTML:Beginner to advanced</h3>
     <p>Learn and practice HTML,from beginner level to avanced</p> 
     <p>4.6<FaStar className='rating'/> Ratings</p>
     <Link to='/courses/htmlintro' ><button>{buttontext}</button></Link>
     {user && user.role === 'student' && (
       <button onClick={handleRegister} disabled={registered || loading} style={{marginTop: '10px'}}>
         {registered ? 'Registered' : loading ? 'Registering...' : 'Register'}
       </button>
     )}
      </div>
    </>
  )
}
