import React, { Component } from 'react';
import PT from 'prop-types';
import { Transition } from 'react-spring';

import { ContainerEl, DiceEl, FooterEl, FooterText, RandomTextEl } from './styled';

class RandomText extends Component {
    state = {
        animating: false,
        text: '',
    };

    componentDidMount() {
        console.log('cdm', this.props.title);
        this.randomizeOptions();
    }

    randomizeOptions = async () => {
        console.log('randomize');

        await this.setState({ animating: true });

        const { wordsArray } = this.props;
        let text;

        if (wordsArray.length > 0) {
            text = wordsArray[Math.floor(Math.random() * wordsArray.length)];

            const removeFromIndex = wordsArray.indexOf(text);
            wordsArray.splice(removeFromIndex, 1);
        } else {
            text = 'Alle vragen zijn geweest.....';
        }

        this.setState({
            animating: false,
            text,
        });
    }

    render() {
        const { animating, text } = this.state;

        return (
            <ContainerEl onClick={this.randomizeOptions}>
                {!animating ? (
                    <Transition
                        from={{ opacity: 0, marginLeft: 60 }}
                        enter={{ opacity: 1, marginLeft: 0 }}
                        leave={{ opacity: 0, marginLeft: 60 }}
                        config={{ tension: 5, friction: 10 }}
                    >
                        {styles => (
                            <RandomTextEl style={{ ...styles }}>
                                {text}
                            </RandomTextEl>
                        )}
                    </Transition>
                ) : false}

                <FooterEl>
                    <DiceEl />
                    <FooterText>Click anywhere to randomize</FooterText>
                </FooterEl>
            </ContainerEl>
        );
    }
}

RandomText.propTypes = {
    wordsArray: PT.array,
};

export default RandomText;
