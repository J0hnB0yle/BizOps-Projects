import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Financial from './Financial';

describe('Financial Component', () => {
  test('renders page title "Financial Analytics"', () => {
    render(
      <BrowserRouter>
        <Financial />
      </BrowserRouter>
    );
    const titleElement = screen.getByRole('heading', { name: /Financial Analytics/i, level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders Financial Overview section', () => {
    render(
      <BrowserRouter>
        <Financial />
      </BrowserRouter>
    );
    const sectionHeader = screen.getByRole('heading', { name: /Financial Overview/i, level: 2 });
    expect(sectionHeader).toBeInTheDocument();
  });
});
