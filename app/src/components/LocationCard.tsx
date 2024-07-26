import React from 'react';
import { Location } from '../models/Company';
import '../css/CompanyCard.css'; // Reuse the same CSS

interface LocationCardProps {
    location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
    return (
        <div className="projcard projcard-blue">
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
