import React, { Component } from 'react';
import PT from 'prop-types';
import { Parallax } from 'react-spring';
import { connect } from 'react-redux';

import { getChallenges, getIcebreakerQuestions, getStandupQuestions } from 'ducks/questions';
import { setCurrentPage } from 'ducks/ui';
import { Page } from 'common';

class ParalaxWrapper extends Component {
  async componentWillMount() {
    const { questions } = this.props;

    if (questions.standup.length === 0) {
      await this.props.getStandupQuestions();
    }
  }

  async componentWillReceiveProps(nextProps) {
    const { ui, questions } = this.props;

    if (ui.currentPage !== nextProps.ui.currentPage) {
      switch (nextProps.ui.currentPage) {
        case 1:
          if (questions.icebreakers.length === 0) {
            await this.props.getIcebreakerQuestions();
          }
          break;

        case 2:
          if (questions.challenges.length === 0) {
            await this.props.getChallenges();
          }
          break;

        default: break;
      }
    }
  }

  scrollPage = (to) => {
    this.parallax.scrollTo(to);
    this.props.setCurrentPage(to);
  };

  render() {
    const { questions: { challenges, icebreakers, standup } } = this.props;

    return (
      <Parallax
        pages={3}
        ref={(p) => { this.parallax = p; }}
        horizontal
        scrolling={false}
      >
        <Page
          offset={0}
          title="Weekly Standup"
          questions={standup}
          nextPage={this.scrollPage}
        />

        <Page
          offset={1}
          title="Icebreakers"
          questions={icebreakers}
          previousPage={this.scrollPage}
          nextPage={this.scrollPage}
        />

        <Page
          offset={2}
          title="Design Challenges"
          questions={challenges}
          previousPage={this.scrollPage}
        />
      </Parallax>
    );
  }
}

ParalaxWrapper.propTypes = {
  getChallenges: PT.func,
  getIcebreakerQuestions: PT.func,
  getStandupQuestions: PT.func,
  setCurrentPage: PT.func,
  ui: PT.shape({
    currentPage: PT.number,
  }),
  questions: PT.shape({
    challenges: PT.array,
    icebreakers: PT.array,
    standup: PT.array,
  }),
};

const mapStateToProps = state => ({
  ui: state.ui || {},
  questions: state.questions || {},
});

const mapDispatchToProps = {
  getChallenges,
  getIcebreakerQuestions,
  getStandupQuestions,
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ParalaxWrapper);
