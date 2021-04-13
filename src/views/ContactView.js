import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/ContactListItem';
import ContactList from '../components/Filter';
import { fetchContacts } from '../redux/App/app-operations';

const ContactView = () => {
  useEffect(() => {
    fetchContacts();
  });

  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  return (
    <div>
      <ContactForm />
      <ContactList />
      <Filter />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactView);
