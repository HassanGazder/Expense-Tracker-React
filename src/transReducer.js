// import { useReducer } from "react";

const transactionReducer = ((state,action)=>{
    console.log(action.type)
    switch(action.type){
        case'add-transaction':{
            return [action.payload , ...state]
        }
        case'delete-transaction':{
            // console.log(action.payload['index'], "----- index");
            // state.splice(actionpayload['index'].,1)
            console.log(action.payload['index']);
            return state.filter((x, index)=> index !== action.payload['index'])
        }
        default:
            return state;
        }
    })
    export default transactionReducer
