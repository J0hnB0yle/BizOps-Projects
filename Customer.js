import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Customer() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Customer Insights</h1>
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
          <li><Link to="/product" className="nav-link">Product</Link></li>
          <li className="active"><Link to="/customer" className="nav-link">Customer</Link></li>
          <li><Link to="/settings" className="nav-link">Settings</Link></li>
        </ul>
      </nav>
      
      <main className="content">
        <section className="metrics-section">
          <h2>Customer Health</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Total Customers</h3>
              <div className="metric-value">847</div>
              <div className="metric-trend positive">+12% this quarter</div>
            </div>
            
            <div className="metric-card">
              <h3>Support Tickets</h3>
              <div className="metric-value">42 open</div>
              <div className="metric-trend positive">-8% from last week</div>
            </div>
            
            <div className="metric-card">
              <h3>Average Response Time</h3>
              <div className="metric-value">1.8 hours</div>
              <div className="metric-trend positive">-15 min improvement</div>
            </div>
          </div>
        </section>
        
        <section className="metrics-section">
          <h2>Customer Feedback</h2>
          <p>Detailed customer feedback analysis will appear here.</p>
        </section>
      </main>
    </div>
  );
}

export default Customer;
