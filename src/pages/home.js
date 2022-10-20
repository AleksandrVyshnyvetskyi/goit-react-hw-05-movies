import { useState, useEffect } from 'react';
import { fetchRequest } from 'components/fetch';
import { Loader } from 'components/Loader/Loader';
import { TrendingList } from 'components/trending/trending';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const result = await fetchRequest(page);
        const items = result.results;

        setMovies(prevMovies => {
          if (page === 1) {
            return [...items];
          } else {
            const prevMovieId = prevMovies.map(({ id }) => id);
            const newMovieIds = items.map(({ id }) => id);
            const newArrId = newMovieIds.reduce((newArr, movieId) => {
              if (prevMovieId.includes(movieId)) {
                return newArr;
              }
              newArr.push(movieId);
              return newArr;
            }, []);

            const filteredNewMovies = items.reduce((newArrItems, item) => {
              if (newArrId.includes(item.id)) {
                newArrItems.push(item);
                return newArrItems;
              }
              return newArrItems;
            }, []);
            return [...prevMovies, ...filteredNewMovies];
          }
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages(page);
  }, [page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <div className="title-box">
        <h2>Trending today:</h2>
      </div>
      {loading ? <Loader /> : <TrendingList movies={movies} />}
      {error && <h4>Oops... Something broke... Try again</h4>}
      {TrendingList && (
        <button type="button" onClick={loadMore} className="btn">
          Load more...
        </button>
      )}
    </>
  );
}
