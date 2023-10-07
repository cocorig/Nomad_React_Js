import React, { useState } from 'react'

export default function Home() {

  const [value , setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue('')
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <h1>To dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="to do" onChange={onChange} value={value}/>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  )

}
