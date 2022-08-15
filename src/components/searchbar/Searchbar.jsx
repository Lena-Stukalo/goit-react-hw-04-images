import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');
  const onInputChange = event => {
    setValue(event.target.value);
  };
  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onFormSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
          value={value}
          onChange={onInputChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
export default Searchbar;
