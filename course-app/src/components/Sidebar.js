import React, { useState } from 'react'; // Add useState here
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hamburger-menu" onClick={toggleSidebar}>☰</div>
      <div className={`sidebar-container ${isOpen ? '' : 'closed'}`}>
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li><Link to="/">Courses</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;