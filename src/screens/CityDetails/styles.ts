import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

export const Content = styled.View`
    padding: 20px;
`;

export const Card = styled.View`
    padding: 20px;
    border-radius: 20px;
    background-color: #1c2331;
    elevation: 5;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const CardTitle = styled.Text`
    font-size: 22px;
    font-family: 'Nunito-SemiBold';
    color: #fff9c4;
`;

export const CardSubtitle = styled.Text`
    font-size: 16px;
    font-family: 'Nunito-Regular';
    color: #fff9c4;
`;

export const CardFooter = styled.View`
    margin-top: 10px;
`;

export const CardParagraph = styled.Text`
    font-size: 40px;
    font-family: 'Nunito-Black';
    color: #ffffff;
`;

export const CardLabel = styled.Text`
    font-size: 12px;
    font-family: 'Nunito-Bold';
    color: #ffffff;
`;

export const CardSmall = styled.View`
    background-color: #1c2331;
    width: 30%;
    height: 120px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const CardSmallLabel = styled.Text`
    font-size: 16px;
    font-family: 'Nunito-Regular';
    color: #fff9c4;
`;

export const CardSmallTitle = styled.Text`
    font-size: 28px;
    font-family: 'Nunito-Black';
    color: #fff9c4;
`;

export const CardMedium = styled.View`
    margin-right: 20px; 
    height: 150px; 
    background-color: #1c2331;
    width: 100px;
    border-radius: 20px;
    align-items: center; 
    justify-content: center;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-family: 'Nunito-Black';
    color: #1c2331;
`;
