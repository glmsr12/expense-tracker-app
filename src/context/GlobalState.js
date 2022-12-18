import React, { createContext, useReducer } from 'react';
import AppReducer from '../context/AppReducer';

//initial state

const initialState = {
  transactions: [
    { id: 1, text: 'Groceries', amount: '-200' },
    { id: 2, text: 'Movie Tickets', amount: '-40' },
    { id: 3, text: 'Income', amount: '3000' },
    { id: 4, text: 'Car Loan', amount: '-400' },
  ],
};

//Create Content

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
