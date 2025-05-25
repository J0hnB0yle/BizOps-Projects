import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from './Product';

describe('Product Component', () => {
  test('renders page title "Product Performance"', () => {
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    );
    const titleElement = screen.getByRole('heading', { name: /Product Performance/i, level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Development Metrics section', () => {
    render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>
    );
    const sectionHeader = screen.getByRole('heading', { name: /Development Metrics/i, level: 2 });
    expect(sectionHeader).toBeInTheDocument();
  });
});
