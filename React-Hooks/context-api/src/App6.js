import { useState, createContext, useContext, useEffect } from "react";


const MyContext = createContext(null);

const ChildComponentOne = () => {
  useEffect(() => {
    console.log("1번 하위 컴포넌트 리렌더링");
  });

  return <ChildComponentTwo />;
};

const ChildComponentTwo = () => {
  const [number, setNumber] = useContext(MyContext);

  useEffect(() => {
    console.log("2번 하위 컴포넌트 리렌더링");
  });

  return <>
    <p>{number}</p>
    <button onClick={() => setNumber(prev => prev + 1)}>+</button>
    <button onClick={() => setNumber(prev => prev - 1)}>-</button>
  </>
};

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <MyContext.Provider value={[number, setNumber]}>
      <ChildComponentOne />
    </MyContext.Provider>
  );
}

// Provider에 ChildComponentOne을 넘겨주었고 ChildComponentOne은 ChildComponentTwo를 렌더링 합니다.

// 그리고 렌더링이 일어날 때마다 콘솔을 찍어보면, 

// 위와 같이 ChildComponentOne은 Context를 사용하지도 않았고 그저 Context를 사용하는 컴포넌트를 렌더링 했을 뿐인데 리렌더링이 발생합니다. 
// 컴포넌트의 state가 변경되면 해당 컴포넌트의 하위도 리렌더링 됩니다. 

// 위에서 설명하는 shoudComponentUpdate는 최적화를 위한 라이프 사이클입니다. 이전 state, props과 현재 state, props을 비교해 달라지지 않았다면 리렌더링을 하지 않게 하는 최적화 기법인데 그것이 기본적으로 적용되지 않았으므로 Provider 내부의 컴포넌트들이 리렌더링되는 것입니다.