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
      <div className="oval">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#0290ff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ color: '#0290ff' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
    </nav>
  );
}

export default Menu;
