export interface Company {
    company_id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    locations: Location[];
}

export interface Location {
    location_id: number;
    company_id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
}
