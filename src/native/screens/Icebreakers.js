import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { getIcebreakerQuestions } from '../../ducks/questions';
import { Header, RandomText, SwipeContainer } from '../components/index';

class Icebreakers extends Component {
    componentDidMount() {
        this.props.getIcebreakerQuestions();
    }

    previousPage = () => {
        this.props.navigation.goBack();
    }

    nextPage = () => {
        this.props.navigation.navigate('Challenge');
    }

    render() {
        const { questions: { loading, icebreakers } } = this.props;

        return (
            <SwipeContainer
                onSwipeLeft={() => this.nextPage()}
                onSwipeRight={() => this.previousPage()}
                colors={['#05c6f3', '#c86dd7']}
            >
                <Header
                    title="Icebreakers"
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}
                />

                {!loading && icebreakers.length > 0 && (
                    <RandomText wordsArray={icebreakers} />
                )}
            </SwipeContainer>
        );
    }
}

Icebreakers.propTypes = {
    getIcebreakerQuestions: PT.func,
    navigation: PT.object,
    questions: PT.shape({
        loading: PT.bool,
        icebreakers: PT.array,
    }),
};

const mapStateToProps = state => ({
    questions: state.questions || {},
});

const mapDispatchToProps = {
    getIcebreakerQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Icebreakers);
