import styles from './ContactList.module.scss';

const ContactList = ({ items, onDeleteContact }) => {
  const statMen = items.reduce(
    (acc, item) => (item.gender === 'male' ? acc + 1 : acc),
    0,
  );
  const statWomen = items.reduce(
    (acc, item) => (item.gender === 'female' ? acc + 1 : acc),
    0,
  );

  return (
    <div>
      <h3>ContactList</h3>
      <p>Found contacts: {items.length}</p>
      <p>men {statMen}</p>
      <p>women {statWomen}</p>
      {items.map(contact => (
        <li key={contact.id} className={styles.ContactList__item}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;
