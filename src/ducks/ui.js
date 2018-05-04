import createAction from '../lib/createAction';

const SET_CURRENT_PAGE = 'ui/SET_CURRENT_PAGE';

const initialState = {
  currentPage: 0,
  error: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: payload,
    };

  default:
    return state;
  }
};

export const setCurrentPage = createAction(SET_CURRENT_PAGE);
