import { ICityWeather } from "../../../interfaces/ICityWeather";
import { ICityWeatherList } from "../../../interfaces/ICityWeatherList";

export interface ICityStateReducer {
    readonly data: ICityWeather[];
    readonly loading: boolean;
    readonly city: ICityWeatherList;
}