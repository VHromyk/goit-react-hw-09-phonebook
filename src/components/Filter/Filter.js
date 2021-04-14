import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/App/app-actions';
import styles from './Filter.module.scss';
import { getFilter } from '../../redux/contacts-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(changeFilter(event.currentTarget.value));

  return (
    <label className={styles.label}>
      Find contacts by name:
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      ></input>
    </label>
  );
}
