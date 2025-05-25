import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Customer from './Customer';

describe('Customer Component', () => {
  test('renders page title "Customer Insights"', () => {
    render(
      <BrowserRouter>
        <Customer />
      </BrowserRouter>
    );
    const titleElement = screen.getByRole('heading', { name: /Customer Insights/i, level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Customer Health section', () => {
    render(
      <BrowserRouter>
        <Customer />
      </BrowserRouter>
    );
    const sectionHeader = screen.getByRole('heading', { name: /Customer Health/i, level: 2 });
    expect(sectionHeader).toBeInTheDocument();
  });
});
