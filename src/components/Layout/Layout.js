import { Header } from 'components/header/header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="header-nav">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
