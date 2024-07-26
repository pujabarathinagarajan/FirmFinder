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
                <LocationCard
                    key={location.location_id}
                    location={location}
                    onClick={onLocationClick}
                />
            ))}
        </div>
    );
};

export default ListView;