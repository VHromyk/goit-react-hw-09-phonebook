import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/Auth';

import './styles.css';
import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactView = lazy(() => import('./views/ContactView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute exact path="/contacts" redirectTo="/login">
            <ContactView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
