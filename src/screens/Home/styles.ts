import styled from 'styled-components/native';

interface IMessageProps {
    size: string;
    fontStyle: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: #1c2331;
`;

export const Content = styled.View`
    padding: 20px;
`;

export const SearchListContainer = styled.View`
    position: absolute;
    top: 70px;
    left: 20px;
    background-color: #ffffff;
    padding: 20px;
    elevation: 5;
    width: 89%;
    border-radius: 10px;
    height: 50%;
`;

export const SearchListItem = styled.TouchableOpacity``;

export const SearchListItemTitle = styled.Text`
    font-size: 16px;
    color: #1c2331;
    font-family: 'Nunito-Black';
`;

export const SearchListItemSubTitle = styled.Text`
    font-size: 12px;
    color: #1c2331;
    font-family: 'Nunito-Regular';
`;

export const SearchListDivider = styled.View`
    border: 1px solid #f5f5f5;
    margin: 20px 0px;
`;

export const CenterContent = styled.View`
    align-items: center;
`;

export const MessageNoContent = styled.Text<IMessageProps>`
    font-family: 'Nunito-Bold';
    font-size: ${(props): string => props.size};
    font-weight: ${(props): string => props.fontStyle};
    color: #fff9c4;
    text-align: center;
    margin-top: 10px;
`;

export const SectionTitle = styled.Text`
    font-size: 22px;
    font-family: 'Nunito-Black';
    color: #fff9c4;
`;

export const Card = styled.TouchableOpacity`
    margin-right: 20px;
    margin-top: 20px;
    background-color: #2a2d6d;
    width: 250px;
    height: 150px;
    padding: 20px;
    border-radius: 5px;
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
    font-size: 24px;
    font-family: 'Nunito-Black';
    color: #ffffff;
`;

export const CardLabel = styled.Text`
    font-size: 12px;
    font-family: 'Nunito-Bold';
    color: #ffffff;
`;
