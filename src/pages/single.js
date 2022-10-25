import { useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { fetchOneMovie } from 'components/fetch';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export function SingleMoviePage() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [genresList, setGenresList] = useState([]);

  const { id } = useParams();
  const location = useLocation();

  const isCastPage = location.pathname.includes('cast');
  const castLink = isCastPage ? `/movies/${id}` : `/movies/${id}/cast`;
  const isReviews = location.pathname.includes('reviews');
  const reviewsLink = isReviews ? `/movies/${id}` : `/movies/${id}/reviews`;

  const navigate = useNavigate('/');
  const imageURL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchInfMovie = async () => {
      setLoading(true);
      try {
        const movieDetails = await fetchOneMovie(id);
        const genres = movieDetails.genres.map(({ name, id }) => (
          <p key={id}>{name}</p>
        ));
        setState(movieDetails);
        setGenresList(genres);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInfMovie();
  }, [id]);

  const goBackHomePage = () => navigate('/home');
  const goBackMoviesPage = () => navigate('/movies');

  return (
    <div>
      <div className="btn-box">
        <button
          className="btn btn-mar-right"
          type="button"
          onClick={goBackHomePage}
        >
          Повернутися на головну
        </button>
        <button className="btn" type="button" onClick={goBackMoviesPage}>
          Повернутися до фільмів
        </button>
      </div>

      {loading && <Loader />}
      {error && <h4>Упссс...Щось зламалося... Спробуй ще...</h4>}
      {state && (
        <>
          <div className="centre">
            <div className="one_movie_box">
              <img
                className="poster_one_movie"
                src={`${imageURL}${state.poster_path}`}
                alt={state.tagline}
                width="300"
              />
              <ul className="one_movie_info">
                <li className="one_movie_info--item">
                  <h2>
                    "{state.title ? state.title : state.name}"<span> | </span>
                    {state.release_date.substr(0, 4)}
                  </h2>
                </li>
                <li className="one_movie_info--item">
                  <b>Рейтинг:</b>
                  <i>{Math.round(state.vote_average * 10)} %</i>
                </li>
                <li className="one_movie_info--item">
                  <b>Опис:</b>
                  <i>{state.overview}</i>
                </li>
                <li className="one_movie_info--item">
                  <b>Жанр:</b>
                  <i className="genres">{genresList}</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="more_info">
            <h3 className="more_info_titile">Інша інформація:</h3>
            <NavLink to={castLink}>Актори</NavLink>
            <NavLink to={reviewsLink}>Відгуки</NavLink>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
}
