import React, { ReactElement, useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import Header from '../../components/Header';
import WeatherAnimated from '../../components/WeatherAnimated';

import sunnyDayAnimation from '../../assets/animations/sunny.json';
import rainDayAnimation from '../../assets/animations/rain.json';
import cloudDayAnimation from '../../assets/animations/clouds.json';

import * as CityActions from '../../store/module/City/actions';

import { IWeatherAnimationContent } from './interfaces/IWeatherAnimationContent';

import { dayOfWeek } from '../../helpers/getDayOfWeek';
import { weatherForecast } from '../../helpers/fiveDayWeatherForecast';

import { RootState } from '../../store/module/rootReducer';
import { IFiveDayWeather } from './interfaces/IFiveDayWeather';

export default function CityDetails(): ReactElement {
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const route = useRoute();

    const { city } = useSelector((state: RootState) => state.city);

    const [cityDetails] = useState(route.params?.city);
    const [fiveDayWeather, setFiveDayWeather] = useState<IFiveDayWeather[]>([]);
    const [date, setDate] = useState({
        day: 0,
        weekDay: '',
        month: '',
    })

    const goBack = (): void => {
        navigation.goBack();
    }

    const getWeatherCondition = (weather: string): ReactElement => {
        const _renderAnimationWeather: IWeatherAnimationContent = {
            Clear: <WeatherAnimated animatedSource={sunnyDayAnimation} />,
            Clouds: <WeatherAnimated animatedSource={cloudDayAnimation} />,
            Rain: <WeatherAnimated animatedSource={rainDayAnimation} />,
        };

        return _renderAnimationWeather[weather];
    };

    const getCityDetails = (): void => {
        dispatch(CityActions.getCityRequest(route.params?.city.id));
    }

    const getDay = (date: string): string => {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);

        const formattedDay = `${day}/${month}`;

        return formattedDay;
    }

    useEffect(() => {
        function getCurrentDate(): void {
            const currentDate = new Date();

            const day = currentDate.getDate();
            const weekDay = currentDate.getDay();
            const month = currentDate.getMonth();

            const response = dayOfWeek(weekDay, month);

            setDate({
                day,
                month: response.m,
                weekDay: response.d,
            })
        }

        getCurrentDate();
        getCityDetails();
    }, [])

    useEffect(() => {
        const response = weatherForecast(city);

        setFiveDayWeather(response);
    }, [city])

    return (
        <Styled.Container>
            <Header onBack={goBack} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Styled.Content>
                    <Styled.Card>
                        <Styled.Row>
                            <Styled.Col>
                                <Styled.CardTitle>{cityDetails.name}</Styled.CardTitle>
                                <Styled.CardSubtitle>{date.weekDay}, {date.day} de {date.month}</Styled.CardSubtitle>
                            </Styled.Col>

                            {getWeatherCondition(cityDetails.weather[0].main)}

                        </Styled.Row>

                        <Styled.CardFooter>
                            <Styled.CardParagraph>{cityDetails.main.temp.toFixed(0)}°</Styled.CardParagraph>
                            <Styled.CardLabel>{cityDetails.weather[0].description}</Styled.CardLabel>
                        </Styled.CardFooter>
                    </Styled.Card>
                </Styled.Content>

                <Styled.Content>
                    <Styled.Row>
                        <Styled.CardSmall>
                            <Styled.CardSmallLabel>Mínima</Styled.CardSmallLabel>
                            <Styled.CardSmallTitle>
                                {cityDetails.main.temp_min.toFixed(0)}°
                            </Styled.CardSmallTitle>
                        </Styled.CardSmall>
                        <Styled.CardSmall>
                            <Styled.CardSmallLabel>Máxima</Styled.CardSmallLabel>
                            <Styled.CardSmallTitle>
                                {cityDetails.main.temp_max.toFixed(0)}°
                            </Styled.CardSmallTitle>
                        </Styled.CardSmall>
                    </Styled.Row>
                </Styled.Content>

                <Styled.Content>
                    <Styled.Title>Próximos dias</Styled.Title>
                    <FlatList
                        keyExtractor={(item, index) => String(index)}
                        data={fiveDayWeather}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }): ReactElement => (
                            <Styled.CardMedium>
                                <Styled.CardSmallLabel>{getDay(item.dt_txt)}</Styled.CardSmallLabel>
                                <Styled.CardSmallTitle>
                                    {item.main.temp.toFixed(0)}°
                                </Styled.CardSmallTitle>
                                {getWeatherCondition(item.weather[0].main)}
                            </Styled.CardMedium>
                        )}
                    />
                </Styled.Content>
            </ScrollView>
        </Styled.Container>
    )
}