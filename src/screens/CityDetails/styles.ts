import styled from 'styled-components/native';

import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../global/colors';
import { FONT_BLACK, FONT_BOLD, FONT_REGULAR, FONT_SEMIBOLD } from '../../global/fontStyle';

export const Container = styled.View`
    flex: 1;
    background-color: ${COLOR_WHITE};
`;

export const Content = styled.View`
    padding: 20px;
`;

export const Card = styled.View`
    padding: 20px;
    border-radius: 20px;
    background-color: ${COLOR_PRIMARY};
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
    color: ${COLOR_SECONDARY};
`;

export const CardSubtitle = styled.Text`
    font-size: 16px;
    font-family: ${FONT_REGULAR};
    color: ${COLOR_SECONDARY};
`;

export const CardFooter = styled.View`
    margin-top: 10px;
`;

export const CardParagraph = styled.Text`
    font-size: 40px;
    font-family: ${FONT_BLACK};
    color: ${COLOR_WHITE};
`;

export const CardLabel = styled.Text`
    font-size: 12px;
    font-family: ${FONT_BOLD};
    color: ${COLOR_WHITE};
`;

export const CardSmall = styled.View`
    background-color: ${COLOR_PRIMARY};
    width: 30%;
    height: 120px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const CardSmallLabel = styled.Text`
    font-size: 16px;
    font-family: ${FONT_REGULAR};
    color: ${COLOR_SECONDARY};
`;

export const CardSmallTitle = styled.Text`
    font-size: 28px;
    font-family: ${FONT_BLACK};
    color: ${COLOR_SECONDARY};
`;

export const CardMedium = styled.View`
    margin-right: 20px; 
    height: 150px; 
    background-color: ${COLOR_PRIMARY};
    width: 100px;
    border-radius: 20px;
    align-items: center; 
    justify-content: center;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-family: ${FONT_BLACK};
    color: ${COLOR_PRIMARY};
`;
