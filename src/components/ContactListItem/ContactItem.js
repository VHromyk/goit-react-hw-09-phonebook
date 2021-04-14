import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactListItem.module.scss';
import { deleteContact } from '../../redux/App/app-operations';
import { filterContacts } from '../../redux/contacts-selectors';

export default function ContacListItem() {
  const list = useSelector(filterContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {list.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span>{name}</span>
          <span>{number}</span>

          <button
            type="button"
            onClick={() => handleDeleteContact(id)}
            className={styles.button}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
