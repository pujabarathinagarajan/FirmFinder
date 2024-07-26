// src/components/CompanyCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Company } from '../models/Company';
import '../css/CompanyCard.css';

interface CompanyCardProps {
    company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
    return (
        <div className="projcard projcard-blue">
            <div className="projcard-innerbox">
                <Link to={`/company/${company.company_id}`} className="projcard-textbox">
                    <div className="projcard-title">{company.name}</div>
                    <div className="projcard-description">{company.address}</div>
                </Link>
            </div>
        </div>
    );
};

export default CompanyCard;
