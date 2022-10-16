import { FormLabelText } from 'components/Components.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getFilter } from '../../redux/Selector';
import { setFilter } from '../../redux/ContactsListSlice';

function Filter() {
  const dispatch = useDispatch();
  const changeFilter = event => dispatch(setFilter(event.currentTarget.value));
  return (
    <label>
      <FormLabelText>Find contacts by name</FormLabelText>

      <input
        type="text"
        name="filter"
        value={useSelector(getFilter)}
        onChange={changeFilter}
      />
    </label>
  );
}

export default Filter;
