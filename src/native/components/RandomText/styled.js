import styled from 'styled-components';

export const ContainerEl = styled.View`
    flex-grow: 2;
    width: 100%;
    padding: 5% 12% 12%;
    flex-direction: column;
    justify-content: space-between;
`;

export const FooterEl = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const FooterText = styled.Text`
    margin-left: 15;
    font-size: 15px;
    font-family: 'circular-pro-book';
    background-color: transparent;
    color: ${props => props.theme.white};
`;

export const RandomTextEl = styled.Text`
    font-size: 30;
    line-height: 40;
    font-family: 'circular-pro-book';
    background-color: transparent;
    color: ${props => props.theme.white};
`;
