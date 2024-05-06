import { Link } from 'react-router-dom';
import '../Navigation.css'; 

const Navigation = () => (
  <nav className="navigation">
    <Link className="navigation-link" to="/">Home</Link>
    <Link className="navigation-link" to="#">Risultati</Link>
    <Link className="navigation-link" to="/favorites">Preferiti</Link>
  </nav>
);

export default Navigation;
