import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Detail() {
  const {id} = useParams();
  const today = [];
  const todayTodo = useSelector(state => (state));

  for(let i = 0; i < todayTodo.length; i++){
      if(Number(id) === (todayTodo[i].id)){
        today.push(todayTodo[i].text )
      }
  }
  return (
    <>
    <h1>{id}</h1>
    <p>{today}</p>
    </>
  )
}
