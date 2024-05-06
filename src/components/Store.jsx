import { createStore, combineReducers } from 'redux';
import favoritesReducer from './favoriteReducer'; // Importa il tuo riduttore

// Combina i riduttori se necessario
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  
});

// Crea lo store di Redux
const store = createStore(rootReducer);

export default store;
