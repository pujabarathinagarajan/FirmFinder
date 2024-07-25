import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CompanyListPage from './CompanyListPage';

test('renders company list page', async () => {
  render(
    <BrowserRouter>
      <CompanyListPage />
    </BrowserRouter>
  );

  expect(screen.getByText(/Company List/i)).toBeInTheDocument();
  const searchInput = screen.getByPlaceholderText(/Search companies by name/i);
  expect(searchInput).toBeInTheDocument();
});
