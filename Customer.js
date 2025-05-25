import React from 'react';
import MainLayout from './MainLayout';
import { customerPageData } from './src/data/customerData.js';

function Customer() {
  return (
    <MainLayout pageTitle="Customer Insights">
        <section className="metrics-section">
          <h2>Customer Health</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Total Customers</h3>
              <div className="metric-value">{customerPageData.totalCustomers.value}</div>
              <div className="metric-trend positive">{customerPageData.totalCustomers.trend}</div>
            </div>
            
            <div className="metric-card">
              <h3>Support Tickets</h3>
              <div className="metric-value">{customerPageData.supportTickets.value}</div>
              <div className="metric-trend positive">{customerPageData.supportTickets.trend}</div>
            </div>
            
            <div className="metric-card">
              <h3>Average Response Time</h3>
              <div className="metric-value">{customerPageData.avgResponseTime.value}</div>
              <div className="metric-trend positive">{customerPageData.avgResponseTime.trend}</div>
            </div>
          </div>
        </section>
        
        <section className="metrics-section">
          <h2>Customer Feedback</h2>
          <p>Detailed customer feedback analysis will appear here.</p>
        </section>
    </MainLayout>
  );
}

export default Customer;
