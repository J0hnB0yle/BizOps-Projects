import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Settings() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Dashboard Settings</h1>
        <div className="header-right">
          <span>Last updated: Today</span>
          <button>Save Changes</button>
        </div>
      </header>
      
      <nav className="sidebar">
        <div className="sidebar-header">Insight Hub</div>
        <ul>
          <li><Link to="/" className="nav-link">Executive</Link></li>
          <li><Link to="/financial" className="nav-link">Financial</Link></li>
          <li><Link to="/product" className="nav-link">Product</Link></li>
          <li><Link to="/customer" className="nav-link">Customer</Link></li>
          <li className="active"><Link to="/settings" className="nav-link">Settings</Link></li>
        </ul>
      </nav>
      
      <main className="content">
        <section className="metrics-section">
          <h2>User Preferences</h2>
          <p>Dashboard configuration options will appear here.</p>
        </section>
        
        <section className="metrics-section">
          <h2>Data Sources</h2>
          <p>Data integration and API connection settings will appear here.</p>
        </section>
      </main>
    </div>
  );
}

export default Settings;
