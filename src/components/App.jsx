// import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout'
import { Home } from 'pages/home';
import './styles.css'

export const App = () => {
  return (
    
        <Routes>     
            <Route path='*' element={<Layout/>}>
              <Route path='home' element={<div className="pad15"><Home/></div>}></Route>
              <Route path='movies' element={<div className="pad15">Movies page</div>}></Route>
            </Route>
        </Routes>
    
  );
};
