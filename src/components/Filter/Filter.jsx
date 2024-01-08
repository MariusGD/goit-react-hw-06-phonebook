import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filterSlice';
import { getFilter } from '../redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};
