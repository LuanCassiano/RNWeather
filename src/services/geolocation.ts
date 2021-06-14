import axios from 'axios';

export async function getLocationByAddress(
    searchText: string | undefined,
): Promise<any> {
    if (!searchText) return [];

    try {
        const data = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=pk.eyJ1IjoibHV1YW5jYXNzaWFubyIsImEiOiJjanBzeWF4aHcwMGNyM3dwYTYzeTlsY2VmIn0.ReacoepEj0J0hJpbyHogYQ`,
        );

        return data;
    } catch (error) {
        throw new Error(error);
    }
}