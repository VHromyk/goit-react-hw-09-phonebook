import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/App/app-operations';
import { fetchContacts } from '../../redux/App/app-operations';
import { getContacts } from '../../redux/contacts-selectors';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   onChangeInput = event => {
//     this.setState({
//       [event.currentTarget.name]: event.currentTarget.value,
//     });
//   };

//   onSubmitForm = event => {
//     const { name, number } = this.state;
//     const { contacts, onSubmit } = this.props;
//     console.log(contacts);

//     event.preventDefault();

//     const findContact = contacts.find(contact => contact.name === name);
//     if (findContact) {
//       alert(`${name} is already in the contact`);
//     } else if (number.length !== 0) {
//       onSubmit(name, number);
//       this.onResetForm();
//     }
//   };

//   onResetForm = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form className={styles.form} onSubmit={this.onSubmitForm}>
//         <label className={styles.label}>
//           Name
//           <input
//             className={styles.input}
//             name="name"
//             value={this.state.name}
//             onChange={this.onChangeInput}
//           ></input>
//         </label>
//         <label className={styles.label}>
//           Number
//           <input
//             className={styles.input}
//             name="number"
//             value={this.state.number}
//             onChange={this.onChangeInput}
//           ></input>
//         </label>
//         <button className={styles.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// На хуках!
export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const updateName = event => {
    setName(event.currentTarget.value);
  };

  const updateNumber = event => {
    setNumber(event.currentTarget.value);
  };

  useEffect(() => {
    dispatch(fetchContacts(), [dispatch]);
  });

  const handleSubmit = event => {
    event.preventDefault();

    const findContact = contacts.find(contact => contact.name === name);
    if (findContact) {
      alert(`${name} is already in the contact`);
    } else if (number.length !== 0) {
      dispatch(addContact(name, number));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          name="name"
          value={name}
          onChange={updateName}
        ></input>
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          name="number"
          value={number}
          onChange={updateNumber}
        ></input>
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
