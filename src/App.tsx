import 'react-native-gesture-handler';

import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import NavigationService from './services/navigation';

export default function App(): ReactElement {
    function registerService(ref: unknown): void {
        NavigationService.setTopLevelNavigator(ref);
    }

    return (
        <NavigationContainer ref={registerService}>
            <Routes />
        </NavigationContainer>
    );
}
