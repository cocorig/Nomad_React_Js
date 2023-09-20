import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext';

export default function Header() {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  // console.log(isDark);
  return (
    <header className='header'
    style={{
      backgroundColor : isDark ? 'black' : 'white',
      color : isDark  ? 'white' : 'black',
    }}
    >
      <h1>Welcome {user}</h1>
    </header>
  )
}
