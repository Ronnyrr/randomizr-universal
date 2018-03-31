import styled from 'styled-components';
import Previous from 'vectors/arrow-left.svg';
import Next from 'vectors/arrow.svg';

export const HeaderEl = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 41vh;
    position: relative;
    padding: 0 5%;
`;

export const PreviousEl = styled(Previous)`
    position: absolute;
    top: 40px;
    left: 5%;
    width: 26px;
    height: 16px;
    cursor: pointer;
    opacity: .85;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`;

export const NextEl = styled(Next)`
    position: absolute;
    top: 40px;
    right: 5%;
    width: 26px;
    height: 16px;
    cursor: pointer;
    opacity: .85;
    transition: opacity .2s;

    &:hover {
        opacity: 1;
    }
`;

export const TitleEl = styled.span`
    font-size: 60px;
    font-family: 'NimbusBlackItalic';
    color: ${props => props.theme.white};
`;
