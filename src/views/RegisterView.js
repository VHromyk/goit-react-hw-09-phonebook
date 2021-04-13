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

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateName = event => {
    setName(event.currentTarget.value);
  };

  const updateEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const updatePassword = event => {
    setPassword(event.currentTarget.value);
  };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    alert(name);
  };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   console.log(this.props);

  //   this.props.onRegister(this.state);

  //   this.setState({ name: '', email: '', password: '' });
  // };

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
};

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
