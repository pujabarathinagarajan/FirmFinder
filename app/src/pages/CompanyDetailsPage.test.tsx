// @ts-ignore
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CompanyDetailsPage from './CompanyDetailsPage';

test('renders company details page with locations', async () => {
  render(
    <MemoryRouter initialEntries={['/company/1']}>
      <Routes>
        <Route path="/company/:id" element={<CompanyDetailsPage />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText(/Company Locations/i)).toBeInTheDocument();
  });

  expect(screen.getByText(/TechNova HQ/i)).toBeInTheDocument();
  expect(screen.getByText(/123 Innovation Drive, San Francisco, CA 94105/i)).toBeInTheDocument();
  expect(screen.getByText(/TechNova R&D Center/i)).toBeInTheDocument();
  expect(screen.getByText(/456 Research Park, Palo Alto, CA 94304/i)).toBeInTheDocument();
});
