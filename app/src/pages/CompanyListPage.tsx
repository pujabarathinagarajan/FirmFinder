import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCompanies } from '../services/api';
import { Company } from '../models/Company';

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
        <div>
            <h1>Company List</h1>
            <input
                type="text"
                placeholder="Search companies by name"
                value={search}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredCompanies.map(company => (
                    <li key={company.company_id}>
                        <Link to={`/company/${company.company_id}`}>
                            <h2>{company.name}</h2>
                            <p>{company.address}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyListPage;
