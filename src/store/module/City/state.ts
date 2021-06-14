import { ICityWeather } from "../../../interfaces/ICityWeather";

export interface ICityStateReducer {
    readonly data: ICityWeather[];
    readonly loading: boolean;
}