import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar-container">
    <h2>Navigation</h2>
    <nav>
      <ul>
        <li><Link to="/">Courses</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
