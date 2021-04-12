import { createAction } from '@reduxjs/toolkit';

const changeInputName = createAction('contactForm/changeInputName');

const changeInputNumber = createAction('contactForm/changeInputNumber');

const submitFormActions = createAction('contactForm/submit');

export default { submitFormActions, changeInputName, changeInputNumber };
