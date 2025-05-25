import React from 'react';
import MainLayout from './MainLayout';
import { financialPageData } from './src/data/financialData.js';

function Financial() {
  return (
    <MainLayout pageTitle="Financial Analytics">
        <section className="metrics-section">
          <h2>Financial Overview</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Revenue Breakdown</h3>
              <div className="metric-value">{financialPageData.revenueBreakdown.value}</div>
              <div className="metric-trend positive">{financialPageData.revenueBreakdown.trend}</div>
            </div>
            
            <div className="metric-card">
              <h3>Gross Margin</h3>
              <div className="metric-value">{financialPageData.grossMargin.value}</div>
              <div className="metric-trend positive">{financialPageData.grossMargin.trend}</div>
            </div>
            
            <div className="metric-card">
              <h3>Operating Expenses</h3>
              <div className="metric-value">{financialPageData.operatingExpenses.value}</div>
              <div className="metric-trend negative">{financialPageData.operatingExpenses.trend}</div>
            </div>
          </div>
        </section>
        
        <section className="metrics-section">
          <h2>Revenue Metrics</h2>
          <p>Detailed financial analysis and projections will appear here.</p>
        </section>
    </MainLayout>
  );
}

export default Financial;
