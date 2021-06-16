import { ICityWeatherList } from "../interfaces/ICityWeatherList";

export const weatherForecast = (data: ICityWeatherList): any => {
    const newArr = data.list.filter((weather) => weather.dt_txt.includes("00:00:00")).slice(0, 5);

    return newArr
}