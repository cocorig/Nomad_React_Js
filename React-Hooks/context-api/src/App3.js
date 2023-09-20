import React, { createContext, useContext, useState } from 'react';

// Context 생성
const AgeContext = createContext();

function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log('상위 컴포넌트가 렌더링 되었어요');
  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>👨‍👩‍👦 상위 컴포넌트</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>상위 컴포넌트 count 증가</button>
      <button onClick={incrementChildAge}>하위 컴포넌트 count 증가</button>

      {/* AgeContext.Provider로 값을 공유 */}
      <AgeContext.Provider value={childAge}>
        <Child name={'licat'} />
      </AgeContext.Provider>
    </div>
  );
}

function Child({ name }) {
  // AgeContext를 사용하여 공유된 값을 읽음
  const childAge = useContext(AgeContext);

  console.log('하위 컴포넌트도 렌더링 되었어요');
  return (
    <div style={{ border: '2px solid coral', padding: '10px' }}>
      <h3>👼 하위 컴포넌트</h3>
      <p>name: {name}</p>
      <p>age: {childAge}살</p>
    </div>
  );
}

export default App;
