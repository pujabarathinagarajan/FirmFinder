// src/pages/CompanyListPage.tsx
import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../services/api';
import { Company } from '../models/Company';
import CompanyCard from '../components/CompanyCard';
import '../css/CompanyListPage.css';
import Header from '../components/Header';

const CompanyListPage: React.FC = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getCompanies = async () => {
            const companies = await fetchCompanies();
            setCompanies(companies);
        };
        getCompanies();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page-container">
            <Header />
            <div className="fixed-container">
                <div className="app-title">Companies List</div>
                <input
                    type="text"
                    placeholder="Search companies by name"
                    value={search}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>
            <div className="scrollable-container">
                <div className="cards-container">
                    {filteredCompanies.map(company => (
                        <CompanyCard key={company.company_id} company={company} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyListPage;
