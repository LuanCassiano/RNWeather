import styled from 'styled-components/native';

import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../global/colors';
import { FONT_BLACK, FONT_BOLD, FONT_REGULAR, FONT_SEMIBOLD } from '../../global/fontStyle';

interface IMessageProps {
    size: string;
    fontStyle: string;
}

interface ICardProps {
    backgroundColor: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_WHITE};
`;

export const Content = styled.View`
    padding: 20px;
`;

export const SearchListContainer = styled.View`
    position: absolute;
    top: 70px;
    left: 20px;
    background-color: ${COLOR_WHITE};
    padding: 20px;
    elevation: 5;
    width: 89%;
    border-radius: 10px;
    height: 50%;
`;

export const SearchListItem = styled.TouchableOpacity``;

export const SearchListItemTitle = styled.Text`
    font-size: 16px;
    color: ${COLOR_PRIMARY};
    font-family: ${FONT_BLACK};
`;

export const SearchListItemSubTitle = styled.Text`
    font-size: 12px;
    color: ${COLOR_PRIMARY};
    font-family: ${FONT_REGULAR};
`;

export const SearchListDivider = styled.View`
    border: 1px solid #f5f5f5;
    margin: 20px 0px;
`;

export const CenterContent = styled.View`
    align-items: center;
`;

export const MessageNoContent = styled.Text<IMessageProps>`
    font-family: ${FONT_BOLD};
    font-size: ${(props): string => props.size};
    font-weight: ${(props): string => props.fontStyle};
    color: ${COLOR_PRIMARY};
    text-align: center;
    margin-top: 10px;
`;

export const SectionTitle = styled.Text`
    font-size: 22px;
    font-family: ${FONT_BLACK};
    color: ${COLOR_PRIMARY};
`;

export const Card = styled.TouchableOpacity<ICardProps>`
    margin: 20px 0px;
    background-color: ${(props): string => props.backgroundColor};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
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
    font-family: ${FONT_SEMIBOLD};
    color: ${COLOR_WHITE};
`;

export const CardSubtitle = styled.Text`
    font-size: 16px;
    font-family: ${FONT_REGULAR};
    color: ${COLOR_WHITE};
`;

export const CardFooter = styled.View`
    margin-top: 20px;
`;

export const CardParagraph = styled.Text`
    font-size: 36px;
    font-family: ${FONT_BOLD};
    color: ${COLOR_SECONDARY};
`;

export const CardLabel = styled.Text`
    font-size: 12px;
    font-family: ${FONT_BOLD};
    color: ${COLOR_WHITE};
`;

export const FlexEndContent = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const Icon = styled.Image`
    width: 30px;
    height: 30px;
`;
