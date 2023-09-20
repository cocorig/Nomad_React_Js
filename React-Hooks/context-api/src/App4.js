import React, { createContext, useContext, useState } from 'react';

// Context 생성
const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={count}>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <ComponentA />
        <ComponentB />
      </div>
    </MyContext.Provider>
  );
}

function ComponentA() {
  // Context 값을 사용
  const contextValue = useContext(MyContext);
  console.log('ComponentA rendered');

  return (
    <div>
      <h2>ComponentA</h2>
      <p>Context Value in ComponentA: {contextValue}</p>
    </div>
  );
}

function ComponentB() {
  // Context 값을 사용
  const contextValue = useContext(MyContext);
  console.log('ComponentB rendered');

  return (
    <div>
      <h2>ComponentB</h2>
      <p>Context Value in ComponentB: {contextValue}</p>
    </div>
  );
}

export default App;
