import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { getStandupQuestions } from '../../ducks/questions';
import { Header, RandomText, SwipeContainer } from '../components/index';

class Standup extends Component {
  componentDidMount() {
    this.props.getStandupQuestions();
  }

  nextPage = () => {
    this.props.navigation.navigate('Icebreakers');
  }

  render() {
    const { questions: { loading, standup } } = this.props;

    return (
      <SwipeContainer onSwipeLeft={() => this.nextPage()}>
        <Header
          title="Weekly standup"
          nextPage={() => this.nextPage()}
        />

        {!loading && standup.length > 0 && (
          <RandomText wordsArray={standup} />
        )}
      </SwipeContainer>
    );
  }
}

Standup.propTypes = {
  getStandupQuestions: PT.func,
  navigation: PT.object,
  questions: PT.shape({
    loading: PT.bool,
    standup: PT.array,
  }),
};

const mapStateToProps = state => ({
  questions: state.questions || {},
});

const mapDispatchToProps = {
  getStandupQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Standup);
