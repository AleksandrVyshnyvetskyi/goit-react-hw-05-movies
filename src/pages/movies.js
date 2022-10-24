import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { usePrevious } from 'components/hooks/usePrevious';
import { fetchMovieByName } from 'components/fetch';
import { Search } from 'components/Search/search';
import { TrendingList } from 'components/trending/trending';

export function MovieGallery() {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('listmovies')) ?? []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const prevPage = usePrevious(page);
  const prevSearchName = usePrevious(searchQuery);

  useEffect(() => {
    window.localStorage.setItem('listmovies', JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const result = await fetchMovieByName(searchQuery, page);
        const items = result.results;
        if (items.length === 0) {
          return alert('Нічого не знайдено, спробуй ще раз...');
        }
        if (page === 1) {
          setMovies([...items]);
        } else {
          setMovies(prev => [...prev, ...items]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!searchQuery) {
      return;
    }
    if (page > prevPage) {
      fetchMovie(searchQuery, page);
      return;
    }
    if (prevSearchName !== searchQuery && page === prevPage) {
      fetchMovie(searchQuery, 1);
      resetPage();
      return;
    }
  }, [searchQuery, page, prevPage, prevSearchName]);

  const resetPage = () => {
    setPage(1);
  };

  const handleSubmitSearchForm = searchName => {
    setSearchParams({ searchQuery: searchName });
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const isMovies = Boolean(movies.length);
  return (
    <div>
      <h3>Будьласка, введіть назву фільму</h3>
      <Search onSubmit={handleSubmitSearchForm} />
      {loading ? <Loader /> : <p></p>}
      {error && <h4>Упссс...Щось зламалося... Спробуй ще...</h4>}
      {movies && <TrendingList movies={movies} />}
      {isMovies && (
        <button type="button" onClick={loadMore} className="btn">
          Показати більше
        </button>
      )}
    </div>
  );
}
