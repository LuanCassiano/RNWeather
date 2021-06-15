interface CityTemperatureList {
    dt: number;
    main: {
        temp: number;
    },
    weather: [
        {
            id: number;
            main: string;
        }
    ],
    dt_txt: string;
}

export interface ICityWeatherList {
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        }
        country: string;
        sunrise: number;
        sunset: number;
    },
    list: CityTemperatureList[];
}