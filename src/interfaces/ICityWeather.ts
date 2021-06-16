export interface ICityWeather {
    coord: {
        lon: number;
        lat: number;
    },

    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ],
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    },
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    },
    wind: {
        speed: number;
        deg: number;
        gust: number;
    },
    id: number;
    name: string;
    cod: number;
    favorite: boolean;
}