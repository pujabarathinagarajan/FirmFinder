import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Location } from '../models/Company';

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

interface MapViewProps {
    locations: Location[];
    focusLocation: Location | null;
}

const MapView: React.FC<MapViewProps> = ({ locations, focusLocation }) => {
    const mapRef = useRef<L.Map | null>(null);

    const MapEventsHandler = () => {
        const map = useMapEvents({
            load: () => {
                mapRef.current = map;
                if (focusLocation) {
                    map.setView([focusLocation.latitude, focusLocation.longitude], 13);
                } else if (locations.length > 0) {
                    map.setView([locations[0].latitude, locations[0].longitude], 13);
                }
            },
        });

        useEffect(() => {
            if (focusLocation && mapRef.current) {
                mapRef.current.setView([focusLocation.latitude, focusLocation.longitude], 13);
            }
        }, [focusLocation]);

        useEffect(() => {
            if (locations.length > 0 && mapRef.current && !focusLocation) {
                mapRef.current.setView([locations[0].latitude, locations[0].longitude], 13);
            }
        }, [locations, focusLocation]);

        return null;
    };

    return (
        <MapContainer
            center={focusLocation ? [focusLocation.latitude, focusLocation.longitude] : [locations[0].latitude, locations[0].longitude]}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
        >
            <MapEventsHandler />
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
    );
};

export default MapView;
