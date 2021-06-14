import React, { ReactElement } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import CityDetailsScreen from '../screens/CityDetails';

const Stack = createStackNavigator();

function MainNavigator(): ReactElement {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="cityDetails" component={CityDetailsScreen} />
        </Stack.Navigator>
    )
}

export default function RootNavigator(): ReactElement {
    return <MainNavigator />
}
