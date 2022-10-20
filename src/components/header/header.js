import { NavLink } from 'react-router-dom';

const navItem = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Header = () => {
  return navItem.map(({ href, text }) => (
    <NavLink className="header-nav__item" to={href} key={href}>
      {text}
    </NavLink>
  ));
};
