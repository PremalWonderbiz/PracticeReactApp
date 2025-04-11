import React, { useReducer, useState } from 'react'

const initialState = {
  firstCounter :  0,
  secondCounter : 10
};

const reducer = (state : any,action : any) => {

switch(action.type){
  case 'increment' : 
    return {...state, firstCounter : state.firstCounter + action.value};
  case 'decrement' : 
    return {...state, firstCounter : state.firstCounter-action.value};
  case 'increment2' : 
    return {...state, secondCounter : state.secondCounter+action.value};
  case 'decrement2' : 
    return {...state, secondCounter : state.secondCounter-action.value};
  case 'reset' : 
    return initialState;
  default : 
    return state;
}

};

function UseReducer() {
    const [count,dispather] = useReducer(reducer,initialState);
  return (
    <div className='text-center'>
        <h1>UseReducerPractice</h1>
        <div>
            <h3>Count = {count.firstCounter} | Counter Two = {count.secondCounter}</h3>
            <button className='m-2 py-2 px-4 rounded-lg bg-blue-600' onClick={() => dispather({type : "increment", value : 1})}>increment</button>
            <button className='m-2 py-2 px-4 rounded-lg bg-red-600' onClick={() => dispather({type : 'decrement', value : 1})}>decrement</button>
            <button className='m-2 py-2 px-4 rounded-lg bg-blue-600' onClick={() => dispather({type : "increment2", value : 2})}>increment2</button>
            <button className='m-2 py-2 px-4 rounded-lg bg-red-600' onClick={() => dispather({type : 'decrement2', value : 2})}>decrement2</button>
            <button className='m-2 py-2 px-4 rounded-lg bg-green-600' onClick={() => dispather({type : "reset"})}>reset</button>
        </div>
    </div>
  )
}

export default UseReducer;