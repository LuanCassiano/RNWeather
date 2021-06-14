import React, { ReactElement, useState } from 'react';

import * as Styled from './styles';

import IconSearch from '../../assets/icons/search.svg';
import IconClose from '../../assets/icons/delete.svg';

import { IHeader } from './interfaces/IHeader';

export default function Header({ onSearch }: IHeader): ReactElement {
    const [searchText, setSearchText] = useState('');

    const clearSearch = (): void => {
        setSearchText('');
        onSearch('');
    }

    return (
        <Styled.Container>
            <Styled.FormControl>
                <Styled.Row>
                    <Styled.FormInput
                        placeholder="Buscar cidades"
                        placeholderTextColor="#fff9c4"
                        onChangeText={(text): void => setSearchText(text)}
                        value={searchText}
                        returnKeyType="search"
                        onEndEditing={(e): Promise<void> => onSearch(e.nativeEvent.text)}
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
