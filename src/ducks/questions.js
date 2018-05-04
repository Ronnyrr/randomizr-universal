import createAction from '../lib/createAction';
import { Firebase, FirebaseRef } from '../lib/firebase';

// constants
export const LOAD_QUESTIONS = 'questions/LOAD_QUESTIONS';
export const SET_CHALLENGES = 'questions/SET_CHALLENGES';
export const SET_ICEBREAKERS = 'questions/SET_ICEBREAKERS';
export const SET_STANDUP = 'questions/SET_STANDUP';

// store
export const initialState = {
  loading: false,
  challenges: [],
  icebreakers: [],
  standup: [],
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case LOAD_QUESTIONS:
    return {
      ...state,
      loading: true,
    };

  case SET_CHALLENGES:
    return {
      ...state,
      loading: false,
      challenges: action.payload,
    };

  case SET_ICEBREAKERS:
    return {
      ...state,
      loading: false,
      icebreakers: action.payload,
    };

  case SET_STANDUP:
    return {
      ...state,
      loading: false,
      standup: action.payload,
    };

  default: return state;
  }
};

// actions
export const loadQuestions = createAction(LOAD_QUESTIONS);
export const setChallenges = createAction(SET_CHALLENGES);
export const setIcebreakers = createAction(SET_ICEBREAKERS);
export const setStandup = createAction(SET_STANDUP);

export function getChallenges() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('challenges')
    .on('value', (snapshot) => {
      const questions = snapshot.val() || {};
      return resolve(dispatch(setChallenges(questions)));
    }))
    .catch(e => console.log('error', e));
}

export function getIcebreakerQuestions() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('icebreakers')
    .on('value', (snapshot) => {
      const questions = snapshot.val() || {};
      return resolve(dispatch(setIcebreakers(questions)));
    }))
    .catch(e => console.log('error', e));
}

export function getStandupQuestions() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('standup')
    .on('value', (snapshot) => {
      const questions = snapshot.val() || {};
      return resolve(dispatch(setStandup(questions)));
    }))
    .catch(e => console.log('error', e));
}
