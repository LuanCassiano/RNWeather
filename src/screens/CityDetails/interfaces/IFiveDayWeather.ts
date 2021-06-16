export interface IFiveDayWeather {
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