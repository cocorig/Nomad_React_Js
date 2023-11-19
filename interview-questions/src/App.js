import { useState, useEffect } from "react";
function App() {
  const [state, setState] = useState(0);
  console.log("state", state);
  // 0 -> 1 -> 1
  useEffect(() => {
    setState(1); // 상태 변경을 예약함 , setState 호출 자체는 비동기적으로 처리되므로,setState를 호출하면 현재 렌더링 사이클에서는 바로 업데이트되지않고, 다음 렌더링 사이클에서 업데이트된 값이 적용된다.
    console.log("useEffect");
  }, [state]); // state를 dependency array에 넣으면?
  return <div>hello world</div>;
}
export default App;

// App.js:4 state 0
// App.js:8 useEffect
// App.js:4 state 1
// App.js:8 useEffect
// App.js:4 state 1

// 1번째 실행 0 에서 1
// 2번째 실행 1 에서 1
