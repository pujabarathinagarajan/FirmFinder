import React from 'react';
import { Link } from 'react-router-dom';
import { Company } from '../models/Company';

interface CompanyListProps {
    companies: Company[];
    search: string;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, search, handleSearchChange }) => {
    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
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

export default CompanyList;
