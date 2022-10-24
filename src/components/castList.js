export function CastList({ actorsList }) {
  const imageURL = 'https://image.tmdb.org/t/p/w300';
  const elements = actorsList.map(({ cast_id, name, profile_path }) => (
    <li key={cast_id}>
      <img src={`${imageURL}${profile_path}`} alt={name} />
      <p>{name}</p>
    </li>
  ));
  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
}
