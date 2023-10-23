import React from 'react'
import { deleteToDo } from '../store';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Todo({text}) {

   // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
  const dispatch =  useDispatch();
  
  const onDeleteBtn = () =>{
  
      dispatch(deleteToDo(text.id))
  }
  return (
    <li> 
      <Link to = {`/${text.id}`}>
      {text.text}
      </Link>
    <button onClick={onDeleteBtn}>❌</button>
 
   </li>
  )
}
