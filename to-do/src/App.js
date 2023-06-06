import { useState ,useEffect} from 'react';


function App() {

  const [todo, setTodo] =  useState('');
  const [todoList, setTodoList] = useState([]); //todo를 저장할 배열
  
  const onValue = (e)=>{
    setTodo(e.target.value)
  }

  const onSubmit = (e)=>{ //버튼을눌러 from 태그를 트리거시켰을때 onSubmit함수실행
    e.preventDefault(); //새로고침방지
    if(todo === ''){
      return;
    }
    
    setTodoList((currentArray) => [todo , ...currentArray])
    setTodo(' '); // todo의 값을 비우자 그럴려면 input value값을 todo로 연결해줘야함
  }
  //useEffect(() => console.log(setTodoList), [setTodoList]); 
  console.log(todoList)
  return (
    <div className="App">
      <h1>My To Dos ({todoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={onValue} value={todo} placeholder='Write your to do...'></input>
        <button>Add To Do</button> 
      </form>
      <hr/>
      <ul>{todoList.map((list, idx) => <li key={idx}>{list}</li>)}</ul>
    </div> //버튼클릭시 form을 submit할꺼얌
  );
}

export default App;
