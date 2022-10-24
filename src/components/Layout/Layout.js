import { Header } from 'components/header/header';
import { Outlet } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';

export const Layout = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="header-nav">
          <Header />
          <Logo />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
