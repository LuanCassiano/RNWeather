export interface IAddress {
    id: string;
    text: string;
    place_name: string;
    geometry: {
        type: string;
        coordinates: [];
    }
}