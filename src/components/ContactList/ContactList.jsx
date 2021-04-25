import styles from './ContactList.module.scss';

const ContactList = ({ items, onDeleteContact, children }) => {
  return (
    <div>
      <h3 className="title">ContactList</h3>
      {children}
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
