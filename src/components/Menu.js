import { NavLink } from 'react-router-dom';
import '../style/Menu.css';

function Menu() {
  return (
    <nav className="menu__container">
      <h2 className="menu__title animated pulse">Bookstore CMS</h2>
      <ul className="menu__links">
        <li className="hover__link"><NavLink className={({ isActive }) => (isActive ? 'menu__link-active' : 'menu__link-desactive')} to="/">BOOKS</NavLink></li>
        <li className="hover__link"><NavLink className={({ isActive }) => (isActive ? 'menu__link-active' : 'menu__link-desactive')} to="/categories">CATEGORIES</NavLink></li>
      </ul>
    </nav>
  );
}

export default Menu;
