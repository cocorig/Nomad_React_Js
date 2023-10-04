import { createStore } from 'redux';

const add =  document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

// 액션을 변수로 만들면 스펠링이 틀리면 경고메세지로 정의되지않은 값이라고 뜨게 만들수잇다, 안정성 추가
const ADD = 'ADD';
const MINUS = 'MINUS';
// *** data를 수정할 수 있는 유일한 곳 ***
// reducer의 두번째 파라미터 actuon은  reducer와 소통하기 위한 방법이다.
const reducer = (state = 0 , action ) => { // reducer가 리턴하는 모든건 data가 된다;
  // state를 -1 해줘,
  // state를 +1 해줘  -> action의 도움으로 해야함 -> 그럼 어떻게 reducer에게 action을 보낼까?
  console.log(action, state);
    switch (action.type) {
      case 'ADD':
        return state + 1;
      case 'MINUS':
        return state - 1;
      default:
        return state;
    }
};

const store = createStore(reducer)
// dispatch()를와 함께 reducer로 메서지를 보냐는 것 , action을 보낼 수 있다.
// store.dispatch({type : "ADD"}) // action은 객체여야함다.

// data의 store를 생성하고,reducer의 메세지를 store에 보내면된다.
// 메세지를 보내는 방법은 dispatch를 사용, 내가 전송한 메세지는 action에 넣으면 되고, 내가 할 일은 action을 체크하면된다.

const handleAdd = () =>{
  store.dispatch({type : ADD})  // 스펠링이 틀려도 동작만 하지않고 , 오류 메세지는 뜨지않기 때문에 혼란을 줄수있다 ,  
}
const handleMinus = () =>{
  store.dispatch({type :MINUS})
}
add.addEventListener('click' ,  handleAdd)
minus.addEventListener('click' , handleMinus)


const onChange = () => {
  // 내가 버튼으로 state를 바꿀때 마다 콘솔에 상태 감지라고 뜨게된다.
  //return console.log('상태 감지');
  // 그럼 상태를 감지할 때마다 실행되니까 현재 상태의 값을 span태그 안에 넣어주는 함수를 
  // subscribe함수의 파라미터로 넣어주면 store의 상태가 변화될 때마다 onChange함수가 실행된다.
  number.textContent = store.getState();
}
// subscribe는 store안에 있는 변화가 있을 때마다 감지해서 불려진다.
store.subscribe(onChange); //store.subscribe(func); // store안의 변화를 감지하면 func 실행

// 1. data의 store를 create하고, store에게 data의 reducer를 알려준다.
// 2. dispatch로 message(action)을 store에 전송
// 3. 이렇게 store, dispatch, action을 말해주면 redux가 reducer를 호출해서 매개변수에 current state와 my action을 넣어줘서 실행
// 4. reducer가 실행되면 data를 바꿔주고 return으로 반환되는 값은 다시 app의 data가 된다.

// 