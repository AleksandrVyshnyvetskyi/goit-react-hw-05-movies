export function RewiewsList({ reviewsList }) {
  const elements = reviewsList.map(({ id, content }) => (
    <li key={id}>{content}</li>
  ));
  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
}
