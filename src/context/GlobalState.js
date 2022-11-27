import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState ={
   transactions: [
    //    { id: 1, text: 'Flower', amount: -20 },
    //    { id: 2, text: 'Salary', amount: 300 },
    //    { id: 3, text: 'Book', amount: -10 },
    //    { id: 4, text: 'Camera', amount: 150 },
    //    { id: 5, text: 'macbook', amount: -350 },
    //    { id: 6, text: 'client', amount: 600 },
    //    { id: 7, text: 'internet bill', amount: -30 },
    //    { id: 8, text: 'affilliate', amount: 3150 },
   ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children})=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state,dispatch] = useReducer(AppReducer,initialState);
    function deletTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (<GlobalContext.Provider value={
        {transactions : state.transactions, deletTransaction,addTransaction}
    }>
        {children}
    </GlobalContext.Provider> )
}