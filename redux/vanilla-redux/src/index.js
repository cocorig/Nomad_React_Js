
import { createStore } from 'redux';


const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 액션 정의
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
// 액션만을 반환하는 함수 (object만을 return)
const addTodoAction = (text,id)=>{
  return {
    type :  ADD_TODO , text ,id
  }
}
const DelTodoAction = (id)=>{
  return {
    type :DELETE_TODO  , id 
  }
}

// 투두 추가 , 삭제
const reducer = (state = [], action)=>{
  // console.log(action); // 내가 보낸 디스패치
  switch(action.type){
    case ADD_TODO:
  
      //state.push(action.text) 절대 상태를 변경하지 말아야 한다.
      return [{text : action.text ,  id  :  action.id} , ...state] // 배열은 과거의 state와 새로운 TOdo를 갖고있다. 새로운 오브젝트로 배열을 생성
    case DELETE_TODO:
      return state.filter((todo)=> action.id !== todo.id)
    default:
      return state;
  }
}
// 스토어 생성
const store = createStore(reducer);

// 삭제 버튼 함수(어떤 버튼이 눌렸는 지)
const deleteToDo = (id) => {
  store.dispatch(DelTodoAction(id))
}

// 화면에 그려주는 함수
const paintTodos = () => {
  const toDos =  store.getState();// 상태를 받아옴
  // 초기화(상태가 바뀔 때마다 값을 초기화 )
  ul.innerHTML = ''
  //console.log(toDos); //오브젝트 형식의 배열
  toDos.forEach(todo=>{ 
    //console.log(todo.id);// 값 , text
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = "DEL"
    btn.addEventListener('click' ,() => deleteToDo(todo.id))
    li.innerHTML = todo.text;
    li.appendChild(btn)
    ul.appendChild(li);
  });
};
// 구독
// 상태가 바뀔 때마다 함수가 리렌더링 되기 때문에 값이 쌓여서 나옴
store.subscribe(paintTodos); 

// 2.입력 값을 받아서 디스패치, 액션 보냄
const addToDo = (text , id) => {
  store.dispatch(addTodoAction(text,id))
  
}

 
// id 임의로 생성함
let id = 0;
// 1. 입력 값을 보냄
const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  id++;
  input.value = "";
  
  addToDo(toDo , id)

};

form.addEventListener("submit", onSubmit);

// 그냥 HTML을 바꾸는 것
// 리스트에 아이템을 넣어주지만 ,UI는 바꾸고 있지만 데이터를 저장하진 않는다. 
{/* <form>
<input type="text" placeholder="to do">
<button>Add</button>
</form>
<ul></ul> */}

// const createToDo = toDo => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

// filter()는 테스트를 통과한 모든 element들로 새로운 배열을 만든다. 기존 배열은 건드리지 않는다.true면 그 새로운 배열에 남아있는 것