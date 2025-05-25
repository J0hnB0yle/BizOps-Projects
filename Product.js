import React from 'react';
import MainLayout from './MainLayout';
import { productPageData } from './src/data/productData.js';

function Product() {
  return (
    <MainLayout pageTitle="Product Performance">
        <section className="metrics-section">
          <h2>Development Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Active Projects</h3>
              <div className="metric-value">{productPageData.activeProjects.value}</div>
              <div className="metric-trend positive">{productPageData.activeProjects.trend}</div>
            </div>
            
            <div className="metric-card">
              <h3>Average Cycle Time</h3>
              <div className="metric-value">{productPageData.avgCycleTime.value}</div>
              <div className="metric-trend positive">{productPageData.avgCycleTime.trend}</div>
            </div>
            
            <div className="metric-card">
              <h3>Code Quality Score</h3>
              <div className="metric-value">{productPageData.codeQualityScore.value}</div>
              <div className="metric-trend positive">{productPageData.codeQualityScore.trend}</div>
            </div>
          </div>
        </section>
        
        <section className="metrics-section">
          <h2>Release Schedule</h2>
          <p>Detailed product roadmap and release timeline will appear here.</p>
        </section>
    </MainLayout>
  );
}

export default Product;
