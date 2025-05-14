import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const mockData = {
    financials: {
      mrr: 125000,
      mrrGrowth: 12.5,
      cac: 1200,
      cacChange: -5.2,
      runway: "18 months",
      runwayChange: 2
    },
    product: {
      sprintCompletion: "92%",
      sprintCompletionChange: 3.5,
      systemUptime: "99.98%",
      systemUptimeChange: 0.01
    },
    customer: {
      churnRate: "4.2%",
      churnRateChange: -0.5,
      nps: 42,
      npsChange: 3
    }
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Executive Command Center</h1>
        <div className="header-right">
          <span>Last updated: Today</span>
          <button>Refresh</button>
        </div>
      </header>
      
      <nav className="sidebar">
        <div className="sidebar-header">Insight Hub</div>
        <ul>
          <li className="active"><Link to="/" className="nav-link">Executive</Link></li>
          <li><Link to="/financial" className="nav-link">Financial</Link></li>
          <li><Link to="/product" className="nav-link">Product</Link></li>
          <li><Link to="/customer" className="nav-link">Customer</Link></li>
          <li><Link to="/settings" className="nav-link">Settings</Link></li>
        </ul>
      </nav>
      
      <main className="content">
        <section className="metrics-section">
          <h2>Financial Health</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Monthly Recurring Revenue</h3>
              <div className="metric-value">${mockData.financials.mrr.toLocaleString()}</div>
              <div className="metric-trend positive">+{mockData.financials.mrrGrowth}% vs prev period</div>
            </div>
            
            <div className="metric-card">
              <h3>Customer Acquisition Cost</h3>
              <div className="metric-value">${mockData.financials.cac.toLocaleString()}</div>
              <div className="metric-trend negative">{mockData.financials.cacChange}% vs prev period</div>
            </div>
            
            <div className="metric-card">
              <h3>Cash Runway</h3>
              <div className="metric-value">{mockData.financials.runway}</div>
              <div className="metric-trend positive">+{mockData.financials.runwayChange}% vs prev period</div>
            </div>
          </div>
        </section>
        
        <section className="metrics-section">
          <h2>Product Performance</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Sprint Completion Rate</h3>
              <div className="metric-value">{mockData.product.sprintCompletion}</div>
              <div className="metric-trend positive">+{mockData.product.sprintCompletionChange}% vs prev period</div>
            </div>
            
            <div className="metric-card">
              <h3>System Uptime</h3>
              <div className="metric-value">{mockData.product.systemUptime}</div>
              <div className="metric-trend positive">+{mockData.product.systemUptimeChange}% vs prev period</div>
            </div>
          </div>
        </section>
        
        <section className="metrics-section">
          <h2>Customer Success</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Customer Churn Rate</h3>
              <div className="metric-value">{mockData.customer.churnRate}</div>
              <div className="metric-trend negative">{mockData.customer.churnRateChange}% vs prev period</div>
            </div>
            
            <div className="metric-card">
              <h3>Net Promoter Score</h3>
              <div className="metric-value">{mockData.customer.nps}</div>
              <div className="metric-trend positive">+{mockData.customer.npsChange} points vs prev period</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
