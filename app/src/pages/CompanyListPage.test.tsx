// src/pages/CompanyListPage.test.tsx
// @ts-ignore
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { server } from '../mocks/server'; // Adjust the import path if necessary
import CompanyListPage from './CompanyListPage';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CompanyListPage', () => {
  test('renders loading state initially', async () => {
    render(
      <Router>
        <CompanyListPage />
      </Router>
    );

    // Adjust this line to match your component's loading state
    // If there's no explicit loading state, you might want to skip this test
    expect(screen.getByText(/Companies List/i)).toBeInTheDocument();
  });

  test('fetches and displays companies', async () => {
    render(
      <Router>
        <CompanyListPage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/TechNova Solutions/i)).toBeInTheDocument();
      expect(screen.getByText(/GreenLeaf Enterprises/i)).toBeInTheDocument();
    });
  });

  test('filters companies based on search input', async () => {
    render(
      <Router>
        <CompanyListPage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText(/TechNova Solutions/i)).toBeInTheDocument();
      expect(screen.getByText(/GreenLeaf Enterprises/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText(/Search companies by name/i), {
      target: { value: 'TechNova' },
    });

    expect(screen.getByText(/TechNova Solutions/i)).toBeInTheDocument();
    expect(screen.queryByText(/GreenLeaf Enterprises/i)).not.toBeInTheDocument();
  });
});
