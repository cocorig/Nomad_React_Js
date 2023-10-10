
import { createStore } from 'redux';


const ADD = 'ADD';
const REMOVE = 'REMOVE';

// 액션 생성함수
export const addToDo = (text) =>{
  return {
    type : ADD,
    text
  }
}

export const deleteToDo = (id) =>{
  return {
    type : REMOVE,
    id
  }
}

const reducer = (state = [], action)=>{
  switch(action.type){
    case ADD:
      return [{text: action.text, id: Date.now()} , ...state];
    case REMOVE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}
const store =  createStore(reducer)


export default store;