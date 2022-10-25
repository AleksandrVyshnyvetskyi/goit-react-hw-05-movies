import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout'
import { Home } from 'pages/home';
import { MovieGallery } from 'pages/movies';
import { SingleMoviePage } from 'pages/single';
import { Cast } from 'pages/cast';
import { Reviews } from 'pages/rewies';
// import { Loader } from './Loader/Loader';
import './styles.css'



// const Navbar = lazy(() => import("./NavBar/NavBar"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
// const SingleMoviePage = lazy(() => import("./pages/SingleMoviePage/SingleMoviePage"));
// const Cast = lazy(() => import("./pages/SingleMoviePage/Cast/Cast"));
// const Reviews = lazy(() => import("./pages/SingleMoviePage/Reviews/Reviews"));



export const App = () => {
  return (
    
        <Routes>     
            <Route path='/' element={<Layout />}>
              <Route path='home' element={<div className="pad15 centre"><Home/></div>}></Route>
              <Route path='movies' element={<div className="pad15"><MovieGallery /></div>}></Route>
              <Route path="/movies/:id" element={<SingleMoviePage />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
              {/* ================================================================================ */}
              

        <>
            {/* <Navbar/>
            <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<SingleMoviePage />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                </Routes>
                </Suspense> */}
        </>



              {/* ================================================================================ */}
            </Route>
        </Routes>
    
  );
};
