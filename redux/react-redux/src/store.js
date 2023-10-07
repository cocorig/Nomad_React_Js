import {createStore} from 'redux';


const ADD = 'ADD';
const REMOVE = 'REMOVE';



const reducer = (state = [], action)=>{
  switch(action.type){
    case ADD:
      return [{text: action.value,} , ...state];
    case REMOVE:
      return state.filter(toDo => toDo !== action.id);
    default:
      return state;
  }
}
const store =  createStore(reducer)


export default store;