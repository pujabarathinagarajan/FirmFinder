import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCompanyLocations } from '../services/api';
import { Location } from '../models/Company';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for the default icon issue in Leaflet
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set default icon for Leaflet markers
const DefaultIcon = L.icon({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const CompanyDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [locations, setLocations] = useState<Location[]>([]);
    const [activeTab, setActiveTab] = useState<'map' | 'list'>('map');

    useEffect(() => {
        const getCompanyLocations = async () => {
            const locations = await fetchCompanyLocations(Number(id));
            console.log('Fetched company locations:', locations);
            setLocations(locations);
        };
        getCompanyLocations();
    }, [id]);

    if (!locations.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Company Locations</h1>

            <div>
                <button onClick={() => setActiveTab('map')} className={activeTab === 'map' ? 'active' : ''}>Map View</button>
                <button onClick={() => setActiveTab('list')} className={activeTab === 'list' ? 'active' : ''}>List View</button>
            </div>

            {activeTab === 'map' ? (
                <MapContainer center={[locations[0].latitude, locations[0].longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {locations.map((location: Location) => (
                        <Marker key={location.location_id} position={[location.latitude, location.longitude]}>
                            <Popup>
                                {location.name}<br />{location.address}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            ) : (
                <ul>
                    {locations.map((location: Location) => (
                        <li key={location.location_id}>
                            <p><strong>{location.name}</strong></p>
                            <p>{location.address}</p>
                            <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
                        </li>
                    ))}
                </ul>
            )}

            <Link to="/">Back to List</Link>
        </div>
    );
};

export default CompanyDetailsPage;
