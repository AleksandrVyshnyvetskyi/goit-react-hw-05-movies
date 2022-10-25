import { useState } from 'react';

export function Search({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const hendleChangeInputSearch = e => {
    const { value } = e.target;
    setSearchName(value);
  };
  const hendleSubmitSearchForm = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      alert('Будьласка, введіть назву фільму!');
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <form onSubmit={hendleSubmitSearchForm}>
      <input
        onChange={hendleChangeInputSearch}
        name="searchName"
        value={searchName}
        type="text"
        autoFocus
        placeholder="Назва фільму"
      />
      <button className="input-btn" type="submit">
        Пошук
      </button>
    </form>
  );
}
