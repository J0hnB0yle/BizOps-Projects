import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Product() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Product Performance</h1>
        <div className="header-right">
          <span>Last updated: Today</span>
          <button>Refresh</button>
        </div>
      </header>
      
      <nav className="sidebar">
        <div className="sidebar-header">Insight Hub</div>
        <ul>
          <li><Link to="/" className="nav-link">Executive</Link></li>
          <li><Link to="/financial" className="nav-link">Financial</Link></li>
          <li className="active"><Link to="/product" className="nav-link">Product</Link></li>
          <li><Link to="/customer" className="nav-link">Customer</Link></li>
          <li><Link to="/settings" className="nav-link">Settings</Link></li>
        </ul>
      </nav>
      
      <main className="content">
        <section className="metrics-section">
          <h2>Development Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Active Projects</h3>
              <div className="metric-value">8</div>
              <div className="metric-trend positive">+2 vs last quarter</div>
            </div>
            
            <div className="metric-card">
              <h3>Average Cycle Time</h3>
              <div className="metric-value">14 days</div>
              <div className="metric-trend positive">-2.5 days improvement</div>
            </div>
            
            <div className="metric-card">
              <h3>Code Quality Score</h3>
              <div className="metric-value">A+</div>
              <div className="metric-trend positive">+5% vs last assessment</div>
            </div>
          </div>
        </section>
        
        <section className="metrics-section">
          <h2>Release Schedule</h2>
          <p>Detailed product roadmap and release timeline will appear here.</p>
        </section>
      </main>
    </div>
  );
}

export default Product;
