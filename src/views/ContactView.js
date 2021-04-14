import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/ContactListItem';
import ContactList from '../components/Filter';
import { fetchContacts } from '../redux/App/app-operations';

export default function ContactView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <div>
      <ContactForm />
      <ContactList />
      <Filter />
    </div>
  );
}
