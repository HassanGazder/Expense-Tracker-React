import { createContext, useReducer } from "react";
import transactionReducer from "./transReducer";
import React from "react";
const initialtransactions = [
];
export const Transactioncontext = createContext(initialtransactions);

const TransactionProvider = ({children}) => {
  console.log(children);
  const [state, dispatch] = useReducer(transactionReducer, initialtransactions);  
  // console.log(state)

  function addtransaction(transobj) {
    console.log(transobj)
    dispatch({
      type: "add-transaction",
      payload: {
        amount: transobj.amount,
        des: transobj.des,
      },
    });
  }
  function deleteTransaction(transobj) {
    console.log(transobj)
    dispatch({
      type: "delete-transaction",
      payload: {
        index:transobj.index
      },
      
    });
  }
 
  return(
    <Transactioncontext.Provider value={{transactions:state,addtransaction,deleteTransaction}}>
      {children}
      {console.log(children)}
    </Transactioncontext.Provider>
  )
};
export default TransactionProvider
