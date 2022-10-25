export function CastList({ actorsList }) {
  const imageURL = 'https://image.tmdb.org/t/p/w300';
  const elements = actorsList.map(({ cast_id, name, profile_path }) => (
    <li className="cast-item" key={cast_id}>
      <img
        className="cast_item__img"
        src={`${imageURL}${profile_path}`}
        alt={name}
      />
      <p>{name}</p>
    </li>
  ));
  return (
    <div className="centre">
      <ul className="cast">{elements}</ul>
    </div>
  );
}
