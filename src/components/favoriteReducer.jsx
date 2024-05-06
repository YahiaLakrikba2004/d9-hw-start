import { ADD_TO_FAVORITES } from './action';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export default favoritesReducer;
