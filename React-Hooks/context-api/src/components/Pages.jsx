import React, { useContext } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { ThemeContext } from '../context/ThemeContext';

// 이 Pages 컴포넌트는 isDark를 사용하고 있지않다.(중간 컴포넌트)
// 단지 자식 컴포넌트의 prop으로 전달하기 위해 prop으로 받을 뿐
export default function Pages() {
  // context로 전달한 정보를 받아오려면 useContext훅 사용(인자로는 만들어준 context를 넣어준다)
  // const data = useContext(ThemeContext);
  // console.log(data);
  
  return (
    <div className='page'> 
      <Header />
      <Content />
      <Footer/>
    </div>
  )
}

