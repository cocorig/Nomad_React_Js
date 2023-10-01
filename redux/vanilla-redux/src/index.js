import { createStore } from 'redux';

const add =  document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

// reducer는 나의 데이터를 수정하는 함수이다.
// data를 바꾸고 수정하는 걸 책임지는 함수.
// reducer가 return 하는 건 나의 어플리케이션에 있는 data가 된다.
const reducer = (state = 0 ) => {
  state --;
  state ++;
 return state; // state를 수정하는 곳
}
// 데이터를 저장할 스토어 생성,
// 내가 store를 만들면 reducer를 만들어 달라고 말하고 있는것
const store = createStore(reducer)
console.log(store.getState());

// 4개의 함수가 있다.
// {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
// @@observable: ƒ observable()dispatch: ƒ dispatch(action)getState: ƒ getState()replaceReducer: ƒ replaceReducer(nextReducer)subscribe: ƒ subscribe(listener)[[Prototype]]: Object

// reducer이 return하는 건 나의 어플리케이션의 data가 되는 것이다.
// 내가 data를 수정하고 싶으면 reducer 사용하면 되고, 인자로 state를 받는다.
// 유일하게 한 개의 함수만 data를 수정할 수 있고, 데이터가 기본적으로 한 곳에만 있는 것이다. -> 리듀서 , 유일하게 상태를 바꿀 수 있는 함수

// store를 만들면 reducer를 initial state를 불러온다. 
// state의 초기값을 지정하지 않으면 undefined, default를 지정할 수 있다.
// 만약 파라미터로 온 state의 값이 없다면 현재 default로 설정한 값이 state가 된다.
// 유일하게 reducer만 state를 수정할 수있다.
// 그럼 조건에 맞게 state를 처리하고 싶을 때는 action을 통해 가능하다.
// 그럼 reducer에서만 state를 수정할 수 있는건 알겠는데  , ++ , -- 는 어떻게 할까? 그건 acttion을 사용하면된다.


// Store는 data를 저장하는 곳
// CreateStore는 reducer를 요구함.
// Reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.

// 나의 어플리케이션의 data를 수정하고 싶으면 reducer을 사용하면되고, state를 인자(argument)로 가지게 될 것이다.