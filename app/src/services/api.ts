import axios from 'axios';
import { Company, Location } from '../models/Company';

const API_BASE_URL = 'http://localhost:8000/api'; // Base backend URL

export const fetchCompanies = async (): Promise<Company[]> => {
    const response = await axios.get(`${API_BASE_URL}/companies`);
    return response.data;
};

export const fetchCompanyDetails = async (companyId: number): Promise<Company> => {
    const response = await axios.get(`${API_BASE_URL}/companies/${companyId}`);
    return response.data;
};

export const fetchCompanyLocations = async (companyId: number): Promise<Location[]> => {
    const response = await axios.get(`${API_BASE_URL}/companies/${companyId}/locations`);
    return response.data;
};
