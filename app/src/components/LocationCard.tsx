import React from 'react';
import { Location } from '../models/Company';
import '../css/CompanyCard.css'; // Reuse the same CSS

interface LocationCardProps {
    location: Location;
    onClick: (location: Location) => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, onClick }) => {
    return (
        <div className="projcard projcard-blue" onClick={() => onClick(location)} style={{ cursor: 'pointer' }}>
            <div className="projcard-innerbox">
                <div className="projcard-textbox">
                    <div className="projcard-title">{location.name}</div>
                    <div className="projcard-description">
                        {location.address}<br />
                        Latitude: {location.latitude}, Longitude: {location.longitude}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
