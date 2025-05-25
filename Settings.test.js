import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Settings from './Settings';

describe('Settings Component', () => {
  test('renders page title "Dashboard Settings"', () => {
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
    const titleElement = screen.getByRole('heading', { name: /Dashboard Settings/i, level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  // Optional: Test for a section header
  test('renders User Preferences section', () => {
    render(
      <BrowserRouter>
        <Settings />
      </BrowserRouter>
    );
    const sectionHeader = screen.getByRole('heading', { name: /User Preferences/i, level: 2 });
    expect(sectionHeader).toBeInTheDocument();
  });
});
