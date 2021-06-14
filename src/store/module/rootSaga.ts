import { all } from 'redux-saga/effects';

import city from './City/sagas';

export default function* rootSaga(): Generator {
    yield all([city]);
}
