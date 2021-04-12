import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

//Стандартный селектор:
// export const filterContacts = state => {
//   const filter = getFilter(state);
//   const items = getContacts(state);
//   const normalized = filter.toLowerCase();

//   return items.filter(contact =>
//     contact.name.toLowerCase().includes(normalized),
//   );
// };

// Мемоизированый селектор:
export const filterContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalized = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalized),
    );
  },
);
