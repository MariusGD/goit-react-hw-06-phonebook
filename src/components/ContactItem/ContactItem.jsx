import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item} key={contact.id}>
      <div>
        {contact.name}: {contact.number}
      </div>
      <button
        className={css.button_delete}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
