import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCompanyLocations } from '../services/api';
import { Location } from '../models/Company';
import MapView from '../components/MapView';
import ListView from '../components/ListView';
import Header from '../components/Header';
import '../css/CompanyDetailsPage.css';
import '../css/Button.css';

const CompanyDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [locations, setLocations] = useState<Location[]>([]);
    const [activeTab, setActiveTab] = useState<'map' | 'list'>('map');
    const [focusLocation, setFocusLocation] = useState<Location | null>(null);
    const navigate = useNavigate();

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

    if (!locations || locations.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page-container">
            <Header />
            <div className="fixed-container">
                <div className="app-title">{locations[0].name.split(' ')[0]} Locations</div>
                <div className="app-desc">Zoom in/out in Map View to view all locations or Click on any location in list view to visualize it in map.</div>
                <div className="navigation-bar">
                    <button className="back-arrow" onClick={() => navigate('/')}>
                        ← Back to List
                    </button>
                    <div className="tab-buttons">
                        <button className={`bn30 ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>Map View</button>
                        <button className={`bn30 ${activeTab === 'list' ? 'active' : ''}`} onClick={() => setActiveTab('list')}>List View</button>
                    </div>
                </div>
            </div>
            <div className="scrollable-container inner-details-container">
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
