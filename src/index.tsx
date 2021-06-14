import React, { ReactElement } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import App from './App';

export default function Root(): ReactElement {
    // return (
    //     <Provider store={store}>
    //         <PersistGate loading={null} persistor={persistor}>
    //             <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    //             <App />
    //         </PersistGate>
    //     </Provider>
    // );

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#4554b4" />
            <App />
        </>
    )
}
