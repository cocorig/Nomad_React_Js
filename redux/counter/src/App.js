import { useSelector , useDispatch } from "react-redux";
// 9. React, Redux에서 UseSelector를 가져오면 index없는 데이터 store에서 counter를 허용 할 수 있게한다.
function App() {
  //  컴포넌트에서 store에 있는 state값을 쓰려면 
  const  cnt =  useSelector((state) => state);
  //컴포넌트에서 state 수정 요청을 하려면 dispatch 사용 
  const dispatch =  useDispatch();
  return (
    <div> 
        <h2>counter : {cnt}</h2> 
  
        <button onClick={()=>{
          dispatch({type : '증가'})
        }}>Plus</button>
        <button onClick={()=>{
          dispatch({type : '감소'})
        }}>Minus</button>
    </div>
  );
}

export default App;
