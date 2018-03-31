import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const HeaderEl = styled.View`
    justify-content: flex-end;
    width: 100%;
    height: 35%;
    position: relative;
    padding: 0 12%;
`;

export const PreviousEl = styled(TouchableOpacity)`
    position: absolute;
    left: 14%;
    top: 25%;
    width: 20;
    height: 20;
    opacity: .85;
`;

export const NextEl = PreviousEl.extend`
    right: 14%;
    left: auto;
`;

export const TitleEl = styled.Text`
    font-size: 46;
    line-height: 40;
    font-family: 'nimbus-black-italic';
    background-color: transparent;
    color: ${props => props.theme.white};
`;
