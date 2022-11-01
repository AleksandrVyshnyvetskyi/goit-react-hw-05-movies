import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchActorsMovie } from 'components/fetch';
import { CastList } from 'components/castList';
import { Loader } from 'components/Loader/Loader';

export default function Cast() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchInfActors = async () => {
      setLoading(true);
      try {
        const movieActors = await fetchActorsMovie(id);
        setState(movieActors.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInfActors();
  }, [id]);

  return (
    <div className="cast_list">
      <h3>Актори:</h3>
      {loading ? <Loader /> : <p></p>}
      {state && <CastList actorsList={state} />}
      {error && <h4>Упссс...Щось зламалося... Спробуй ще...</h4>}
    </div>
  );
}
