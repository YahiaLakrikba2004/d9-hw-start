import { ADD_TO_FAVORITES } from './action'

const initialState = {
  favorites: { content: [] },
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      }
    default:
      return state
  }
}

export default favoritesReducer
