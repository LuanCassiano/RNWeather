import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #454bb4;
`;

export const Content = styled.View`
    padding: 20px;
`;

export const SearchListContainer = styled.View`
    position: absolute;
    top: 65px;
    left: 20px;
    background-color: #ffffff;
    padding: 20px;
    elevation: 5;
    width: 90%;
`;

export const SearchListItem = styled.TouchableOpacity``;

export const SearchListItemTitle = styled.Text`
    font-size: 16px;
    color: #4554b4;
    font-weight: bold;
`;

export const SearchListItemSubTitle = styled.Text`
    font-size: 12px;
    color: #4554b4;
`;

export const SearchListDivider = styled.View`
    border: 1px solid #f5f5f5;
    margin: 20px 0px;
`;
