import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainLayout.module.css';

const MainLayout = ({ pageTitle, children }) => {
  const isActive = (path) => window.location.pathname === path;

  const handleRefresh = () => {
    console.log('Refresh button clicked. Data refresh logic would go here.');
    // In a real app, you might add: alert('Simulating data refresh!');
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>{pageTitle}</h1>
        <div className={styles['header-actions']}>
          <span>Last updated: Jan 1, 2024</span>
          <button 
            className={styles['refresh-button']} 
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>
      </header>
      <nav className={styles.sidebar}>
        <h2 className={styles['sidebar-header']}>Insight Hub</h2>
        <ul>
          <li className={isActive('/') ? styles.active : ''}>
            <Link to="/" className={styles['nav-link']}>Executive</Link>
          </li>
          <li className={isActive('/financial') ? styles.active : ''}>
            <Link to="/financial" className={styles['nav-link']}>Financial</Link>
          </li>
          <li className={isActive('/product') ? styles.active : ''}>
            <Link to="/product" className={styles['nav-link']}>Product</Link>
          </li>
          <li className={isActive('/customer') ? styles.active : ''}>
            <Link to="/customer" className={styles['nav-link']}>Customer</Link>
          </li>
          <li className={isActive('/settings') ? styles.active : ''}>
            <Link to="/settings" className={styles['nav-link']}>Settings</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
