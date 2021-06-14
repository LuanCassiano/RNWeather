import styled from 'styled-components/native';

export const Container = styled.View`
    height: 80px;
    padding: 20px;
    background-color: #151a25;
    justify-content: center;
    elevation: 5;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const FormControl = styled.View`
    flex: 1;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const FormInput = styled.TextInput`
    flex: 1;
    padding-left: 15px;
    color: #ffffff;
    font-family: 'Nunito-Regular';
`;

export const FormAction = styled.TouchableOpacity`
    padding-right: 20px;
    align-items: center;
    justify-content: center;
`;