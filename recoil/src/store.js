
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
const initialState = JSON.parse(window.localStorage.getItem("todos")) || [];
const reducer = (state = initialState, action)=>{
  switch(action.type){
    case ADD:
      const newToDo = { text: action.text, id: Date.now() };
      const newState = [newToDo, ...state];
      saveToLocalStorage(newState);
      return newState;
    case REMOVE:
      const filteredState = state.filter(toDo => toDo.id !== action.id);
      saveToLocalStorage(filteredState);
      return filteredState;

    default:
      return state;
  }
}
const saveToLocalStorage = (state) => {
 /// 배열을 문자열로 바궈서 데이터 저장todos 이름으로 저장
  window.localStorage.setItem("todos", JSON.stringify(state));
};

const store =  createStore(reducer)


export default store;


// 1.localStorage 데이터 저장 
// 데이터 저장은 key: value 형태로 숫자, 문자 데이터 저장 가능
// localStorage.setItem("key이름", 넣을 데이터)
// 따라서 먼저 JavaScript 객체를 사용하여 JSON 문자열로 변환(JSON.stringify())하여 로컬 저장소에 저장해야함.

//2. 데이터 수정 추가
// localStorage.getItem('key이름')으로 저장한 데이터를 불러온다
// 이때 불러온 데이터는 문자 형태로 되어있어서 JSON.parse(localStorage.getItem('key이름')) 해서 array/object 형태로 바꿔준다.

// JSON.parse(localStorage.getItem('key이름')).push(넣을 데이터);로 데이터를 추가한다.

// JSON.stringify(JSON.parse(localStorage.getItem('key이름')))다시 배열 -> 문자로 변경한다.

// localStorage.setItem('key이름',JSON.stringify(JSON.parse(localStorage.getItem('key이름'))))