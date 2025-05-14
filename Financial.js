import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Financial() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Financial Analytics</h1>
        <div className="header-right">
          <span>Last updated: Today</span>
          <button>Refresh</button>
        </div>
      </header>
      
      <nav className="sidebar">
        <div className="sidebar-header">Insight Hub</div>
        <ul>
          <li><Link to="/" className="nav-link">Executive</Link></li>
          <li className="active"><Link to="/financial" className="nav-link">Financial</Link></li>
          <li><Link to="/product" className="nav-link">Product</Link></li>
          <li><Link to="/customer" className="nav-link">Customer</Link></li>
          <li><Link to="/settings" className="nav-link">Settings</Link></li>
        </ul>
      </nav>
      
      <main className="content">
        <section className="metrics-section">
          <h2>Financial Overview</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Revenue Breakdown</h3>
              <div className="metric-value">$1.5M</div>
              <div className="metric-trend positive">+8.3% YTD</div>
            </div>
            
            <div className="metric-card">
              <h3>Gross Margin</h3>
              <div className="metric-value">72%</div>
              <div className="metric-trend positive">+2.5% vs prev quarter</div>
            </div>
            
            <div className="metric-card">
              <h3>Operating Expenses</h3>
              <div className="metric-value">$850K</div>
              <div className="metric-trend negative">+3.7% vs budget</div>
            </div>
          </div>
        </section>
        
        <section className="metrics-section">
          <h2>Revenue Metrics</h2>
          <p>Detailed financial analysis and projections will appear here.</p>
        </section>
      </main>
    </div>
  );
}

export default Financial;
