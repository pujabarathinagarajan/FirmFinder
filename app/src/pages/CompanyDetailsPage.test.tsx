// @ts-ignore
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CompanyDetailsPage from './CompanyDetailsPage';
import { server } from '../mocks/server'; // Adjust the import path if necessary

// Mocking useMapEvents from react-leaflet
jest.mock('react-leaflet', () => ({
  ...jest.requireActual('react-leaflet'),
  useMapEvents: jest.fn().mockImplementation(() => {
    return {
      setView: jest.fn(),
    };
  }),
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CompanyDetailsPage', () => {
  test('renders loading state initially', async () => {
    render(
      <MemoryRouter initialEntries={['/company/1']}>
        <Routes>
          <Route path="/company/:id" element={<CompanyDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Adjust this line to match your component's loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('fetches and displays company locations', async () => {
    render(
      <MemoryRouter initialEntries={['/company/1']}>
        <Routes>
          <Route path="/company/:id" element={<CompanyDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/TechNova Locations/i)).toBeInTheDocument();
      expect(screen.getByText(/TechNova HQ/i)).toBeInTheDocument();
      expect(screen.getByText(/TechNova R&D Center/i)).toBeInTheDocument();
    });
  });

  test('switches between Map View and List View', async () => {
    render(
      <MemoryRouter initialEntries={['/company/1']}>
        <Routes>
          <Route path="/company/:id" element={<CompanyDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/TechNova HQ/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /List View/i }));
    expect(screen.getByText(/TechNova HQ/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Map View/i }));
    expect(screen.getByText(/TechNova HQ/i)).toBeInTheDocument(); // Assuming MapView also shows location names
  });

  test('navigates back to the company list', async () => {
    render(
      <MemoryRouter initialEntries={['/company/1']}>
        <Routes>
          <Route path="/company/:id" element={<CompanyDetailsPage />} />
          <Route path="/" element={<div>Company List Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/TechNova HQ/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /← Back to List/i }));

    await waitFor(() => {
      expect(screen.getByText(/Company List Page/i)).toBeInTheDocument();
    });
  });
});
