import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

declare global {
    interface Console {
        tron: any;
    }
}

if (__DEV__) {
    const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
        .configure({ host: '192.168.100.64' })
        .useReactNative()
        .use(reactotronRedux())
        .use(reactotronSaga())
        .connect();

    tron.clear!();

    console.tron = tron;
}