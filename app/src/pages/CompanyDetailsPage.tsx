import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCompanyLocations } from '../services/api';
import { Location } from '../models/Company';
import MapView from '../components/MapView';
import ListView from '../components/ListView';
import '../css/CompanyDetailsPage.css'; // Ensure this is the correct path to your CSS file
import logo from '../assets/logo.png'; // Ensure this is the correct path to your logo

const CompanyDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [locations, setLocations] = useState<Location[]>([]);
    const [activeTab, setActiveTab] = useState<'map' | 'list'>('map');
    const [focusLocation, setFocusLocation] = useState<Location | null>(null);

    useEffect(() => {
        const getCompanyLocations = async () => {
            const locations = await fetchCompanyLocations(Number(id));
            console.log('Fetched company locations:', locations);
            setLocations(locations);
        };
        getCompanyLocations();
    }, [id]);

    const handleLocationClick = (location: Location) => {
        setActiveTab('map');
        setFocusLocation(location);
    };

    if (!locations.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page-container">
            <div className="header-container">
                <img src={logo} alt="Firm Finder Logo" className="logo" />
                <div className="app-title">Company Locations</div>
            </div>
            <div class = "inner-details-container">
                <div className="tab-buttons">
                    <button onClick={() => setActiveTab('map')} className={activeTab === 'map' ? 'active' : ''}>Map View</button>
                    <button onClick={() => setActiveTab('list')} className={activeTab === 'list' ? 'active' : ''}>List View</button>
                    <Link to="/">Back to List</Link>
                </div>
                {activeTab === 'map' ? (
                    <MapView locations={locations} focusLocation={focusLocation} />
                ) : (
                    <ListView locations={locations} onLocationClick={handleLocationClick} />
                )}
            </div>
        </div>
    );
};

export default CompanyDetailsPage;
