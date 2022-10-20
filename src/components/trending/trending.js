import { NavLink } from 'react-router-dom';

export function TrendingList({ movies }) {
  const trendingItem = movies.map(({ id, title, name }) => {
    return (
      <li key={id} className="trending-list__item">
        <NavLink to={`/movies/${id}`} className="movie-name">
          {title ? title : name}
        </NavLink>
      </li>
    );
  });
  return <ul>{trendingItem}</ul>;
}
