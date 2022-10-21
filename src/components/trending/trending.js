import { NavLink } from 'react-router-dom';

export function TrendingList({ movies }) {
  const trendingItem = movies.map(({ id, title, name, backdrop_path }) => {
    const imageURL = 'https://image.tmdb.org/t/p/w300';
    return (
      <li key={id} className="trending-list__item">
        <NavLink className="trending-list__item--link" to={`/movies/${id}`}>
          <img src={`${imageURL}${backdrop_path}`} alt={title}></img>
          <p className="movie-name">{title ? title : name}</p>
        </NavLink>
      </li>
    );
  });
  return <ul className="tranding-list">{trendingItem}</ul>;
}
