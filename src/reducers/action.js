export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'

export const addToFavorites = companyName => ({
  type: ADD_TO_FAVORITES,
  payload: companyName,
})
