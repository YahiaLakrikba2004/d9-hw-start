// FavoritesPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h1>Aziende Preferite</h1>
      {Object.keys(favorites).length > 0 ? (
        <ul>
          {Object.keys(favorites).map((company, index) => (
            <li key={index}>
              <Link to={`/${company}`}>{company}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Non hai ancora aggiunto nessuna azienda ai preferiti.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
