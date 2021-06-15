import { produce } from 'immer';
import { CityTypes } from './types';
import { ICityStateReducer } from './state';

const INITIAL_STATE: ICityStateReducer = {
    data: [],
    city: {
        city: {
            coord: {
                lat: 0,
                lon: 0,
            },
            country: '',
            id: 0,
            name: '',
            sunrise: 0,
            sunset: 0
        },
        list: []
    },
    loading: false,
}

export default function City(state = INITIAL_STATE, action: any) {
    return produce(state, draft => {
        switch (action.type) {
            case CityTypes.ADD_CITY_REQUEST: {
                draft.loading = true;
                break;
            }

            case CityTypes.ADD_CITY_SUCCESS: {
                draft.loading = false;
                draft.data = [...draft.data, action.payload];
                break;
            }

            case CityTypes.GET_CITY_REQUEST: {
                draft.loading = true;
                break;
            }

            case CityTypes.GET_CITY_SUCCESS: {
                draft.city = action.payload;
                draft.loading = false;
                break;
            }

            default:
                break;
        }
    });
}