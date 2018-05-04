import createAction from '../lib/createAction';

// constants
export const SET_FONTS_LOADED = 'fonts/SET_FONTS_LOADED';

// default state
export const initialState = {
  loaded: false,
};

// reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_FONTS_LOADED:
    return {
      ...state,
      loaded: true,
    };

  default: return state;
  }
};

// actions
export const setFontsLoaded = createAction(SET_FONTS_LOADED);
