import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate('/');
  const goBackHomePage = () => navigate('/');
  const goBackMoviesPage = () => navigate('/movies');
  return (
    <div className="background">
      <div className="container">
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
        <div className="not-found-message-box">
          <h1 className="not-found-message">
            Упс... Сторінку не знайдено... <br />
            Поверніться та спробуйте ще раз
          </h1>
        </div>
      </div>
    </div>
  );
}
