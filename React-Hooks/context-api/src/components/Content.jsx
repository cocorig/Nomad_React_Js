import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext';

export default function Content() {

  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  // console.log(user);
  return (
    <header className='content'
    style={{
      backgroundColor : isDark ? 'black' : 'white',
      color : isDark  ? 'white' : 'black',
    }}
    >
      <p>{user}님, Content</p>
    </header>
  )
}
