import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';


export default function Footer() {

  const {isDark , setIsDark} = useContext(ThemeContext)

  const toggleTheme = ()=>{
    setIsDark(!isDark);
  };

  return (
    <header className='footer'
    style={{
      backgroundColor : isDark ? 'black' : 'white',
    }}
    >
      <button className='button' onClick={toggleTheme}>Dark Mode</button>
    </header>
  )
}
