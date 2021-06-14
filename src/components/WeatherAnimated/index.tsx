import React, { ReactElement } from 'react';
import LottieView from 'lottie-react-native';
import { IWeatherAnimated } from './interfaces/IWeatherAnimated';

export default function WeatherAnimated({ animatedSource }: IWeatherAnimated): ReactElement {
    return (
        <LottieView source={animatedSource} autoPlay loop style={{ alignItems: 'flex-end', width: 50 }} />
    )
}
