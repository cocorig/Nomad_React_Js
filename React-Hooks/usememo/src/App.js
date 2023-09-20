import { useState , useCallback, useMemo } from 'react';
import Child from './Child';


//  함수형 컴포넌트  -> 상태가 변할 때마다 리 렌더링됨, 컴포넌트가 가진 모든 자식 컴포넌트도 모두 리 렌더링이된다.
function App() { 
  const [parentAge ,  setParentAge] = useState(0);


  const incrementParentAge = () =>{
    setParentAge(parentAge + 1);
  }


  // App 컴포넌트가 렌더링 될 때마다 출력

  console.log('상위 컴포넌트가 렌더링 되었어요');

  const TellMe = useCallback(()=>{ // 메모제이션했기 때문에 TellMe는 컴포넌트가 렌더링 되어도 같은 메모리 주소를 가리킨다.
      console.log('하연아 사랑해🎯');
  },[]);

  const name = useMemo(()=>{
      return {
      last: '이',
      first : '하연'
  }

  },[]);
  return (
    <div style={{border: '2px solid navy' , padding: '10px'}}>
      
      <h1>👨‍👩‍👦 상위 컴포넌트</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>상위 컴포넌트 count 증가</button>
      <Child TellMe={TellMe} name={name}/>
    </div>
  );
}
export default App;

// 상위 컴포넌트으ㅢ 상태가 변경되는데 왜 하위 컴포넌트까지 리렌더링이 되는걸까?
// 굳이? 여기 하위 컴포넌트는 prop으로 받은 name 과 age가 변하지않으면 렌더링이 필요가 없다. 매번 화면에 같은 결과를 보여주기 때문에 , -> props이 바뀌지 않으면 리렌더링을 막아주는 최적화를 해줘야한다
// 이전에 사용했던 값을 메모리에 저장해두고 새로 렌더링하는 대신 꺼내서 재사용하는 것
//  React.memo 는 컴포넌트가 같은 props로 자주 렌더링 되거나 컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야할 때 사용한다.


// React.memo는 오직 Props 변화에만 의존하는 최적화 방법 , 때문에 상태가 변하는 useState, useReducer , useContext의 상태와 관련된 훅을 사용한다면 ,Props의 변화가 없더라도  여전히 리렌더링이 발생한다.