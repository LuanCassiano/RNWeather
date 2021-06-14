import { AnyAction } from 'redux';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { IApiResponse } from '../../../interfaces/IApiResponse';
import { ICityWeather } from '../../../interfaces/ICityWeather';
import api from '../../../services/api';

import { addCitySuccess } from './actions';

import { CityTypes } from './types';

export function* addCity({ payload }: AnyAction): Generator {
    console.tron.log('payload', payload);
    try {
        const response = (yield call(api.get, '/weather', {
            params: {
                q: payload,
                appid: 'f720a72d147f421b606922bc5408e474',
                units: 'metric'
            }
        })) as IApiResponse<ICityWeather>;

        yield put(addCitySuccess(response.data))

    } catch (error) {
        console.tron.log('error', error.response)
    }
}

export default all([
    takeLatest(CityTypes.ADD_CITY_REQUEST, addCity)
]);
