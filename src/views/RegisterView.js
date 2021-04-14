import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/Auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const updateName = event => {
    setName(event.currentTarget.value);
  };

  const updateEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const updatePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');

    alert(name);
  };

  return (
    <div>
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={updateName} />
        </label>

        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
