import React, { ReactElement, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styles';

import Header from '../../components/Header';
import WeatherAnimated from '../../components/WeatherAnimated';

import { getLocationByAddress } from '../../services/geolocation';

import * as CityActions from '../../store/module/City/actions';

import { RootState } from '../../store/module/rootReducer';

import sunnyDayAnimation from '../../assets/animations/sunny.json';
import rainDayAnimation from '../../assets/animations/rain.json';
import cloudDayAnimation from '../../assets/animations/clouds.json';

import { IWeatherAnimationContent } from './interfaces/IWeatherAnimationContent';

export default function Home(): ReactElement {
    const dispatch = useDispatch();

    const { data } = useSelector((state: RootState) => state.city);

    const [addresses, setAddresses] = useState();

    const getCities = async (textSearch: string): Promise<void> => {
        const response = await getLocationByAddress(textSearch);
        setAddresses(response.data);
    }

    const onAddCity = (city: string): void => {
        dispatch(CityActions.addCityRequest(city))
    }

    const getWeatherCondition = (weather: string): ReactElement => {
        const _renderAnimationWeather: IWeatherAnimationContent = {
            Clear: <WeatherAnimated animatedSource={sunnyDayAnimation} />,
            Clouds: <WeatherAnimated animatedSource={cloudDayAnimation} />,
            Rain: <WeatherAnimated animatedSource={rainDayAnimation} />,
        };

        return _renderAnimationWeather[weather];
    }

    const _renderSearchList = (): ReactElement => {
        if (addresses) {
            return (
                <Styled.SearchListContainer>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={addresses?.features}
                        renderItem={({ item }): ReactElement => (
                            <>
                                <TouchableOpacity onPress={(): void => onAddCity(item.text)}>
                                    <Styled.SearchListItemTitle>{item.text}</Styled.SearchListItemTitle>
                                    <Styled.SearchListItemSubTitle>{item.place_name}</Styled.SearchListItemSubTitle>
                                </TouchableOpacity>
                                <Styled.SearchListDivider />
                            </>
                        )}
                    />
                </Styled.SearchListContainer>
            )
        }

        return (<></>)
    }

    const _renderNoContent = (): ReactElement => {
        return (
            <Styled.CenterContent>
                <Styled.MessageNoContent fontStyle="bold" size="20px">Parece que você ainda não adicionou uma cidade</Styled.MessageNoContent>
                <Styled.MessageNoContent fontStyle="normal" size="16px">Tente adicionar uma cidade usando o campo de busca</Styled.MessageNoContent>
            </Styled.CenterContent>
        )
    }

    return (
        <Styled.Container>
            <Header onSearch={getCities} />

            {addresses ? (
                <>
                    {_renderSearchList()}
                </>
            ) : (
                <Styled.Content>
                    {data.length > 0 ? (
                        <>
                            <Styled.SectionTitle>Cidades</Styled.SectionTitle>
                            <FlatList
                                keyExtractor={item => String(item.id)}
                                data={data}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={16}
                                renderItem={({ item }): ReactElement => {
                                    return (
                                        <Styled.Card>


                                            <Styled.Row>
                                                <Styled.Col>
                                                    <Styled.CardTitle>{item.name}</Styled.CardTitle>
                                                    <Styled.CardSubtitle>{item.sys.country}</Styled.CardSubtitle>
                                                </Styled.Col>

                                                {getWeatherCondition(item.weather[0].main)}

                                            </Styled.Row>

                                            <Styled.CardFooter>
                                                <Styled.CardParagraph>{item.main.temp.toFixed(0)}°</Styled.CardParagraph>
                                                <Styled.Row>
                                                    <Styled.CardLabel>Min {item.main.temp_min.toFixed(0)}°</Styled.CardLabel>
                                                    <Styled.CardLabel>Max {item.main.temp_max.toFixed(0)}°</Styled.CardLabel>
                                                </Styled.Row>
                                            </Styled.CardFooter>
                                        </Styled.Card>
                                    )
                                }}
                            />
                        </>
                    ) : (
                        <>
                            {_renderNoContent()}
                        </>
                    )}
                </Styled.Content>
            )}



            {/* <Styled.Content>
                <Styled.SectionTitle>Minhas cidades favoritas</Styled.SectionTitle>
            </Styled.Content> */}

        </Styled.Container>
    )
}