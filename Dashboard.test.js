import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  test('renders page title "Executive Command Center"', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    const titleElement = screen.getByRole('heading', { name: /Executive Command Center/i, level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Financial Health section', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    const sectionHeader = screen.getByRole('heading', { name: /Financial Health/i, level: 2 });
    expect(sectionHeader).toBeInTheDocument();
  });
});
