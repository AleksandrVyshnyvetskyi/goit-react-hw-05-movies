import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense  } from 'react';
import './styles.css'
import { Loader } from './Loader/Loader';

export const App = () => {
  const Home = lazy(() => import('./pages/home'));
  const MovieGallery = lazy(() => import('./pages/movies'));
  const SingleMoviePage = lazy(() => import('./pages/single'));
  const Cast = lazy(() => import('./pages/cast'));
  const Reviews = lazy(() => import('./pages/rewies'));
  const NotFoundPage = lazy(() => import('./pages/notFoundPage'));

  return (
    <Suspense fallback={<div className='centre'><Loader/></div>}>
        <Routes>     
              <Route path='/' element={<Home/>}></Route>
              <Route path='movies' element={<MovieGallery />}></Route>
              <Route path="/movies/:id" element={<SingleMoviePage />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Suspense>
  );
};
