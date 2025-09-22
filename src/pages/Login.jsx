import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/loginstyle.css';
import logo from '../Glow mind logo.png';
import { FaAsterisk } from 'react-icons/fa';
import Footer from '../component/Footer';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (email.trim() === '' || password.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.message || 'Login failed');
      return;
    }
    login(data.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    // Redirect based on user role
    if (data.user.role === 'instructor') {
      navigate('/instructor-dashboard');
    } else if (data.user.role === 'student') {
      navigate('/dashboard');
    } else {
      // Default fallback for admin or other roles
      navigate('/dashboard');
    }
  } catch (err) {
    alert('Server error. Please try again.');
  }
};

  return (
    <>
    <div className="login-bg">
    <div className="box">
      <div className="container">
        <div className="logoimg">
          <img src={logo} alt="logo" width={120} height={120} />
        </div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">
              Email Address <FaAsterisk className="asterisk" />
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              Password <FaAsterisk className="asterisk" />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="btn">
            SIGN IN
          </button>
        </form>
        <div className="links">
          <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}
