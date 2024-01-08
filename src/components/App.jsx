import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContactsCount } from './redux/selectors';
import { Toaster } from 'react-hot-toast';
import css from './App.module.css';

export const App = () => {
  const count = useSelector(getContactsCount);

  return (
    <div className={css.section}>
      <h1 className={css.title}>Redux Homework(6) - Phonebook </h1>
      <ContactForm />
      <h2 className={`${css.subtitle} ${css.contactsTitle}`}>Contacts</h2>
      <p className={css.totalContacts}>
        Total contacts in phonebook:
        <span className={css.total_count}> {count}</span>
      </p>
      <Filter />
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};
