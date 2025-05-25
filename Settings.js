import React from 'react';
import MainLayout from './MainLayout';

function Settings() {
  return (
    <MainLayout pageTitle="Dashboard Settings">
      <section className="metrics-section">
        <h2>User Preferences</h2>
        <p>Dashboard configuration options will appear here.</p>
      </section>
      
      <section className="metrics-section">
        <h2>Data Sources</h2>
        <p>Data integration and API connection settings will appear here.</p>
      </section>
    </MainLayout>
  );
}

export default Settings;
