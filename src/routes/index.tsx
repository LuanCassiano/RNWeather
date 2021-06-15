import React, { ReactElement } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import CityDetailsScreen from '../screens/CityDetails';

import { ICityWeather } from '../interfaces/ICityWeather';

type MainNavigatorParamList = {
    home: undefined;
    cityDetails: { city: ICityWeather }
}

const Stack = createStackNavigator<MainNavigatorParamList>();

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
