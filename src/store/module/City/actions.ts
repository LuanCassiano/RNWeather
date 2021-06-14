import { CityTypes } from './types';
import IAction from '../interfaces/IAction';
import { ICityWeather } from '../../../interfaces/ICityWeather';

export function addCityRequest(cityName: string): IAction<string> {
    return {
        type: CityTypes.ADD_CITY_REQUEST,
        payload: cityName,
    }
}

export function addCitySuccess(data: ICityWeather): IAction<ICityWeather> {
    return {
        type: CityTypes.ADD_CITY_SUCCESS,
        payload: data,
    }
}
