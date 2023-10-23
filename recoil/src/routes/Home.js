/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToDo , deleteToDo } from '../store';
import Todo from '../components/Todo';
function Home() {

  const [text , setText] = useState('');

   // useSelector 
  const toDo = useSelector(state => (state)); 
  console.log(toDo);
  // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
  const dispatch =  useDispatch();
  

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text))
    setText('')
  }

  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <>
      <h1>To dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="to do" onChange={onChange} value={text}/>
        <button>Add</button>
      </form>
      <ul>{toDo.map((todo)=>(
        <Todo text = {todo} key={todo.id}/>
      ))}
      </ul>
    </>
  )

}


export default Home;


// // 액션 생성함수
// export const addToDo = (text) =>{
//   return {
//     type : ADD,
//     text
//   }
// }

// export const deleteToDo = (id) =>{
//   return {
//     type : REMOVE,
//     id
//   }
// }