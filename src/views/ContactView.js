import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactListItem from '../components/ContactListItem';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/App/app-operations';

export default function ContactView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactListItem />
    </div>
  );
}
