import React, { ReactElement, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import * as Styled from './styles';

import IconSearch from '../../assets/icons/search.svg';
import IconClose from '../../assets/icons/delete.svg';
import IconBack from '../../assets/icons/left-arrow.png';

import { IHeader } from './interfaces/IHeader';

export default function Header({ onSearch, onBack }: IHeader): ReactElement {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: string): void => {
        if (onSearch) {
            onSearch(text);
        }
    }

    const clearSearch = (): void => {
        setSearchText('');
        handleSearch('');
    }

    const back = (): ReactElement => {
        if (onBack) {
            return (
                <TouchableOpacity onPress={onBack}>
                    <Image source={IconBack} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            )
        }

        return (<></>)
    }

    const search = (): ReactElement => {
        if (onSearch) {
            return (
                <Styled.FormControl>
                    <Styled.Row>
                        <Styled.FormInput
                            placeholder="Buscar cidades"
                            placeholderTextColor="#ffffff"
                            onChangeText={(text): void => setSearchText(text)}
                            value={searchText}
                            returnKeyType="search"
                            onEndEditing={(e): void => handleSearch(e.nativeEvent.text)}
                        />

                        {searchText === '' ? (
                            <Styled.FormAction>
                                <IconSearch width={15} height={15} />
                            </Styled.FormAction>
                        ) : (
                            <Styled.FormAction onPress={clearSearch}>
                                <IconClose width={15} height={15} />
                            </Styled.FormAction>
                        )}
                    </Styled.Row>
                </Styled.FormControl>
            )
        }

        return (<></>)
    }

    return (
        <Styled.Container>
            <Styled.Row>
                {back()}
                {search()}
            </Styled.Row>

        </Styled.Container>
    )
}
