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

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const updateEmail = event => {
    setEmail(event.currentTarget.value);
  };
  const updatePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
