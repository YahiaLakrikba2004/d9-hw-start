import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './reducers/Store'; 
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import FavoritesPage from './components/FavoritePage';
import Navigation from './components/Navigation'; 

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <div className="App">
          <Navigation /> 
          <Routes>
            <Route path="/" element={<MainSearch />} />
            <Route path="/:company" element={<CompanySearchResults />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
