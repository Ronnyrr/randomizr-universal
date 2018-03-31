import styled from 'styled-components';
import Dice from 'vectors/dice.svg';

export const ContainerEl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 50vh;
    width: 100%;
    padding: 0 5%;
    user-select: none;
    cursor: pointer;
`;

export const FooterEl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DiceEl = styled(Dice)`
    width: 20px;
    height: 20px;
`;

export const FooterText = styled.span`
    margin-left: 15px;
    font-size: 15px;
    color: ${props => props.theme.white};
`;

export const RandomTextEl = styled.span`
    flex-grow: 2;
    max-width: 850px;
    font-size: 40px;
    line-height: 46px;
    color: ${props => props.theme.white};
`;
