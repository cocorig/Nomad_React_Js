import { useState } from "react";
import './App.css';
import Pages from './components/Pages';
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";


function App() {
  // isDark는 전역적인 데이터
  const [isDark , setIsDark] = useState(false);

  //  Pages를 context의 Provider로 감싸준다
  return ( // value안엔 전달하고자 하는 데이터를 집어넣어준다 , 객체형식으로 넣어준다
  <UserContext.Provider value={'하연'}>
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {/* ThemeContext.Provider 가 감싸는 모든 하위컴포넌트들은 value로 넣어준  값에 접근할 수 있게된다.*/}
        <Pages></Pages>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
