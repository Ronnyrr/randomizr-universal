import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { LinearGradient } from 'expo';
import GestureRecognizer from 'react-native-swipe-gestures';

const ContainerEl = styled(GestureRecognizer)`
    flex: 1;
    flex-direction: column;
`;

const BackgroundEl = styled(LinearGradient)`
    flex: 1;
    flex-direction: column;
`;

const SwipeContainer = ({
    colors, children, onSwipeLeft, onSwipeRight,
}) => (
    <BackgroundEl
        colors={colors}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
    >
        <ContainerEl
            onSwipeLeft={() => onSwipeLeft && onSwipeLeft()}
            onSwipeRight={() => onSwipeRight && onSwipeRight()}
        >
            {children}
        </ContainerEl>
    </BackgroundEl>
);

SwipeContainer.propTypes = {
    colors: PT.array,
    children: PT.array,
    onSwipeLeft: PT.func,
    onSwipeRight: PT.func,
};

SwipeContainer.defaultProps = {
    colors: ['#a0d945', '#05c6f3'],
};

export default SwipeContainer;
