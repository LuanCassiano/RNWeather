import { CityTypes } from './types';
import IAction from '../interfaces/IAction';
import { ICityWeather } from '../../../interfaces/ICityWeather';
import { ICityWeatherList } from '../../../interfaces/ICityWeatherList';

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

export function getCityRequest(cityId: number): IAction<number> {
    return {
        type: CityTypes.GET_CITY_REQUEST,
        payload: cityId,
    }
}

export function getCitySuccess(city: ICityWeatherList): IAction<ICityWeatherList> {
    return {
        type: CityTypes.GET_CITY_SUCCESS,
        payload: city,
    }
}
