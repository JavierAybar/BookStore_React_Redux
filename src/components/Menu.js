import { NavLink } from 'react-router-dom';
import '../style/Menu.css';

function Menu() {
  return (
    <nav className="menu__container">
      <h2 className="menu__title">Bookstore CMS</h2>
      <ul className="menu__links">
        <li><NavLink className="menu__link-desactive" to="/">BOOKS</NavLink></li>
        <li><NavLink className="menu__link-desactive" to="/categories">CATEGORIES</NavLink></li>
      </ul>
    </nav>
  );
}

export default Menu;
