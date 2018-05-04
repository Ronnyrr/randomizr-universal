import React, { Component } from 'react';
import PT from 'prop-types';
import { Animated, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { SVG } from '../';
import { ContainerEl, FooterEl, FooterText, RandomTextEl } from './styled';

class RandomText extends Component {
  state = {
    text: '',
    fadeValue: new Animated.Value(0),
    positionValue: new Animated.Value(50),
  };

  componentDidMount() {
    this.randomizeOptions();
  }

  randomizeOptions = () => {
    const { wordsArray } = this.props;

    let text = wordsArray[Math.floor(Math.random() * wordsArray.length)];

    const removeFromIndex = wordsArray.indexOf(text);
    wordsArray.splice(removeFromIndex, 1);

    if (wordsArray.length === 0) {
      text = 'Alle vragen zijn geweest.....';
    }

    this.setState({ text });
    this.animateEls();
  }

  animateEls = () => {
    this.state.fadeValue.setValue(0);
    this.state.positionValue.setValue(50);

    Animated.parallel([
      Animated.timing(
        this.state.fadeValue,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        },
      ),
      Animated.timing(
        this.state.positionValue,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        },
      ),
    ]).start();
  }

  render() {
    const { fonts } = this.props;

    return (
      fonts.loaded ? (
        <TouchableWithoutFeedback onPress={() => this.randomizeOptions()}>
          <ContainerEl>
            <Animated.View
              style={{
                width: '100%',
                opacity: this.state.fadeValue,
                transform: [
                  { translateX: this.state.positionValue },
                ],
              }}
            >
              <RandomTextEl>{this.state.text}</RandomTextEl>
            </Animated.View>

            <FooterEl>
              <SVG name="dice" fill="#ffffff" width={20} />
              <FooterText>Click anywhere to randomize</FooterText>
            </FooterEl>
          </ContainerEl>
        </TouchableWithoutFeedback>
      ) : <View />
    );
  }
}

RandomText.propTypes = {
  fonts: PT.shape({
    loaded: PT.bool,
  }),
  wordsArray: PT.array,
};

const mapStateToProps = state => ({
  fonts: state.fonts || {},
});

export default connect(mapStateToProps)(RandomText);
