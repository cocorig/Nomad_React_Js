import React  , {memo} from 'react';


//  부모 컴포넌트가 리렌더링되면 자식컴포넌트도 리렌더링된다.
//  자식 컴포넌트는 props로 받은 name , age가 변경되지 않으면 리렌더랑 할 필요가 없다.
const Child = ({TellMe ,name }) => {

  console.log('하위 컴포넌트도 렌더링 되었어요');
  return (
    <div  style={{border :'2px solid coral' , padding: '10px'}}>
      <h3>👼 하위 컴포넌트</h3>
    
      <p>{name}</p>
      <button onClick={TellMe}>Tell Me</button>
    </div>
  )
}


export default memo(Child);

//  동작원리
// 리액트 memo는 리액트에서 제공하는 고차 컴포넌트 중 하나인데, 이 컴포넌트는 컴포넌트를 인자로 받는데 인자로 받은 컴포넌트를 최적화해서 반환해주는 함수이다.

// useMemo로 최적화된 컴포넌트는 Props로 받은 name이나 age에 변화가 없다면 렌더링을 하지않고 변했을 때만 렌더링을 한단