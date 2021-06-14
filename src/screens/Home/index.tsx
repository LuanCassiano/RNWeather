import React, { ReactElement, useState } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';

import * as Styled from './styles';

import Header from '../../components/Header';

import { getLocationByAddress } from '../../services/geolocation';

export default function Home(): ReactElement {
    const [addresses, setAddresses] = useState();

    const getCities = async (textSearch: string): Promise<void> => {
        const response = await getLocationByAddress(textSearch);
        setAddresses(response.data);
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
                                <TouchableOpacity>
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
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#fff9c4' }}>Parece que você ainda não adicionou uma cidade</Text>
                <Text style={{ fontSize: 16, textAlign: 'center', color: '#fff9c4' }}>Tente adicionar uma cidade usando o campo de busca</Text>
            </View>
        )
    }

    // console.tron.log("addressessssss", addresses);

    return (
        <Styled.Container>
            <Header onSearch={getCities} />

            {/* {_renderSearchList()} */}

            <Styled.Content>
                {/* <Text>Cidades</Text> */}
                {_renderNoContent()}
            </Styled.Content>
        </Styled.Container>
    )
}