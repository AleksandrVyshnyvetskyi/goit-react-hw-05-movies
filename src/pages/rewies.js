import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'components/fetch';
import { RewiewsList } from 'components/rewiesList';
import { Loader } from 'components/Loader/Loader';

export function Reviews() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();
  console.log(state);
  useEffect(() => {
    const fetchInfReviews = async () => {
      setLoading(true);
      try {
        const reviews = await fetchReviews(id);
        setState(reviews.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInfReviews();
  }, [id]);
  const isState = Boolean(state.length);

  return (
    <div>
      <h3>Останні відгуки:</h3>
      {loading ? <Loader /> : <p></p>}
      {isState ? (
        <RewiewsList reviewsList={state} />
      ) : (
        <p>Ваш вігук може бути першим</p>
      )}
      {error && <h4>Упссс...Щось зламалося... Спробуй ще...</h4>}
    </div>
  );
}
