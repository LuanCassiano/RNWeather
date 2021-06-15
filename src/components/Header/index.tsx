import React, { ReactElement, useState } from 'react';

import * as Styled from './styles';

import IconSearch from '../../assets/icons/search.svg';
import IconClose from '../../assets/icons/delete.svg';

import { IHeader } from './interfaces/IHeader';

export default function Header({ onSearch, onBack, onLike }: IHeader): ReactElement {
    const [searchText, setSearchText] = useState('');

    const search = (text: string): void => {
        if (onSearch) {
            onSearch(text);
        }
    }

    const clearSearch = (): void => {
        setSearchText('');
        search('');
    }



    return (
        <Styled.Container>
            <Styled.FormControl>
                <Styled.Row>
                    <Styled.FormInput
                        placeholder="Buscar cidades"
                        placeholderTextColor="#ffffff"
                        onChangeText={(text): void => setSearchText(text)}
                        value={searchText}
                        returnKeyType="search"
                        onEndEditing={(e): void => search(e.nativeEvent.text)}
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
        </Styled.Container>
    )
}
