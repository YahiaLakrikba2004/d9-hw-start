import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoriteReducer'

const store = configureStore({ reducer: favoritesReducer })

export default store
