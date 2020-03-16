import React, { createContext, useReducer } from "react";
import RootReducer from '../reducer/root.reducer';
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/transactions/";

const initialTransactions = {
  transactions: [],
  error: null,
  loading: true,
};

export const TransactionContext = createContext(initialTransactions);

export const TransactionsProvider = function({ children }) {
  const [state, dispatch] = useReducer(RootReducer, initialTransactions);
  async function getTransactions() {
    try {
      const response = await axios.get(`${BASE_URL}getTransactions`);

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: response.data.data,
      })
    } catch(err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.message
      })
    }
  }

  async function deleteTransaction(id) {
    try {
      const response = await axios.delete(`${BASE_URL}deleteTransaction/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
    } catch(err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.message
      })
    }
  }

  async function addTransaction(newTransaction) {
    try{
      const response = await axios.post(`${BASE_URL}addTransaction`, newTransaction);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: response.data.data
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err.response.data.message
      })
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
