import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { getChallenges } from '../../ducks/questions';
import { Header, RandomText, SwipeContainer } from '../components/index';

class Challenge extends Component {
  componentDidMount() {
    this.props.getChallenges();
  }

    previousPage = () => {
      this.props.navigation.goBack();
    }

    render() {
      const { questions: { loading, challenges } } = this.props;

      return (
        <SwipeContainer
          onSwipeRight={() => this.previousPage()}
          colors={['#c86dd7', '#e0a03d']}
        >
          <Header
            title="Design Challenge"
            previousPage={() => this.previousPage()}
          />

          {!loading && challenges.length > 0 && (
            <RandomText wordsArray={challenges} />
          )}
        </SwipeContainer>
      );
    }
}

Challenge.propTypes = {
  getChallenges: PT.func,
  navigation: PT.object,
  questions: PT.shape({
    loading: PT.bool,
    challenges: PT.array,
  }),
};

const mapStateToProps = state => ({
  questions: state.questions || {},
});

const mapDispatchToProps = {
  getChallenges,
};

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
