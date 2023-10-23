import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useRecoilState } from "recoil";
import { countState } from "./atom";

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      />

      {count}
    </div>
  );
}
//useRecoilState는 countState를 구독하고 있다는 뜻 , 구독중인 컴포넌트들만 다시 렌더링됨  props가 필요없음
function DisplayCounter() {
  const [count] = useRecoilState(countState);
  return <div>{count}</div>;
}
function App() {
  return (
    <>
      <Counter />
      <DisplayCounter />
    </>
  );
}
export default App;
