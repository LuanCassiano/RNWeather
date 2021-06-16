import React, { ReactElement, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import Header from '../../components/Header';
import WeatherAnimated from '../../components/WeatherAnimated';

import { getLocationByAddress } from '../../services/geolocation';

import * as CityActions from '../../store/module/City/actions';

import { RootState } from '../../store/module/rootReducer';

import sunnyDayAnimation from '../../assets/animations/sunny.json';
import rainDayAnimation from '../../assets/animations/rain.json';
import cloudDayAnimation from '../../assets/animations/clouds.json';

import IconLike from '../../assets/icons/heart.png';
import IconLikeSelected from '../../assets/icons/like-selected.png';
import IconRemove from '../../assets/icons/remove.png';

import { IWeatherAnimationContent } from './interfaces/IWeatherAnimationContent';
import { ICityWeather } from '../../interfaces/ICityWeather';

export default function Home(): ReactElement {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const { data } = useSelector((state: RootState) => state.city);

    const [addresses, setAddresses] = useState();

    const getCities = async (textSearch: string): Promise<void> => {
        const response = await getLocationByAddress(textSearch);
        setAddresses(response.data);
    };

    const onAddCity = (city: string): void => {
        dispatch(CityActions.addCityRequest(city));
    };

    const onNavigate = (item: ICityWeather): void => {
        navigation.navigate('cityDetails', {
            city: item
        })
    };

    const onRemove = (cityId: number): void => {
        dispatch(CityActions.removeCityRequest(cityId));
    }

    const onFavorite = (cityId: number): void => {
        dispatch(CityActions.addFavoriteCity(cityId));
    }

    const getWeatherCondition = (weather: string): ReactElement => {
        const _renderAnimationWeather: IWeatherAnimationContent = {
            Clear: <WeatherAnimated animatedSource={sunnyDayAnimation} />,
            Clouds: <WeatherAnimated animatedSource={cloudDayAnimation} />,
            Rain: <WeatherAnimated animatedSource={rainDayAnimation} />,
        };

        return _renderAnimationWeather[weather];
    };

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
        };

        return (<></>)
    };

    const _renderNoContent = (): ReactElement => {
        return (
            <Styled.CenterContent>
                <Styled.MessageNoContent fontStyle="bold" size="20px">Parece que você ainda não adicionou uma cidade</Styled.MessageNoContent>
                <Styled.MessageNoContent fontStyle="normal" size="16px">Tente adicionar uma cidade usando o campo de busca</Styled.MessageNoContent>
            </Styled.CenterContent>
        )
    };

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
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 100 }}
                                renderItem={({ item }): ReactElement => {
                                    return (
                                        <Styled.Card onPress={(): void => onNavigate(item)} backgroundColor={item.favorite ? '#384662' : '#1c2331'}>
                                            <Styled.Row>
                                                <Styled.Col>
                                                    <Styled.CardParagraph>{item.main.temp.toFixed(0)}°</Styled.CardParagraph>
                                                    <Styled.CardTitle>{item.name}</Styled.CardTitle>
                                                    <Styled.CardSubtitle>{item.sys.country}</Styled.CardSubtitle>
                                                </Styled.Col>


                                                {getWeatherCondition(item.weather[0].main)}

                                            </Styled.Row>

                                            <Styled.CardFooter>
                                                <Styled.FlexEndContent>
                                                    <TouchableOpacity style={{ marginRight: 20 }} onPress={(): void => onFavorite(item.id)}>
                                                        {item.favorite ? (
                                                            <Styled.Icon source={IconLikeSelected} />
                                                        ) : (
                                                            <Styled.Icon source={IconLike} />
                                                        )}
                                                    </TouchableOpacity>

                                                    <TouchableOpacity onPress={(): void => onRemove(item.id)}>
                                                        <Styled.Icon source={IconRemove} />
                                                    </TouchableOpacity>
                                                </Styled.FlexEndContent>
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
            )
            }
        </Styled.Container >
    )
}