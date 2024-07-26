import React from 'react';
import { Location } from '../models/Company';
import LocationCard from './LocationCard';

interface ListViewProps {
    locations: Location[];
    onLocationClick: (location: Location) => void;
}

const ListView: React.FC<ListViewProps> = ({ locations, onLocationClick }) => {
    return (
        <div className="list-container">
            {locations.map((location: Location) => (
                <div key={location.location_id} onClick={() => onLocationClick(location)} style={{ cursor: 'pointer' }}>
                    <LocationCard location={location} />
                </div>
            ))}
        </div>
    );
};

export default ListView;
