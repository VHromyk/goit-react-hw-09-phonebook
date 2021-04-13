import React, { useState } from 'react';
import { connect } from 'react-redux';
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

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = event => {
    setEmail(event.currentTarget.value);
  };
  const updatePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(`${email} ${password}`);
  };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   this.props.onLogin(this.state);

  //   this.setState({ name: '', email: '', password: '' });
  // };

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
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
