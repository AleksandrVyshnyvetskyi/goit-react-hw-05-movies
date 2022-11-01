import { NavLink } from 'react-router-dom';

const navItem = [
  { href: '/', text: 'Головна' },
  { href: 'movies', text: 'Фільми' },
];

export const Header = () => {
  return navItem.map(({ href, text }) => (
    <NavLink className="header-nav__item" to={href} key={href}>
      {text}
    </NavLink>
  ));
};
