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

  const goBackHomePage = () => navigate('/');
  const goBackMoviesPage = () => navigate('/movies');

  return (
    <div>
      <button type="button" onClick={goBackHomePage}>
        Повернутися на головну
      </button>
      <button type="button" onClick={goBackMoviesPage}>
        Повернутися до фільмів
      </button>
      {loading && <Loader />}
      {error && <h4>Упссс...Щось зламалося... Спробуй ще...</h4>}
      {state && (
        <>
          <div>
            <img
              src={`${imageURL}${state.poster_path}`}
              alt={state.tagline}
              width="300"
            />
            <ul>
              <li>
                <h2>{state.title ? state.title : state.name}</h2>
                <b>({state.release_date.substr(0, 4)})</b>
              </li>
              <li>
                <b>Рейтинг:</b>
                <i>{Math.round(state.vote_average * 10)} %</i>
              </li>
              <li>
                <b>Опис:</b>
                <i>{state.overview}</i>
              </li>
              <li>
                <b>Жанр:</b>
                <i>{genresList}</i>
              </li>
            </ul>
          </div>
          <h3>Інша інформація:</h3>
          <ul>
            <li>
              <NavLink to={castLink}>Актори</NavLink>
            </li>
            <li>
              <NavLink to={reviewsLink}>Відгуки</NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
}
