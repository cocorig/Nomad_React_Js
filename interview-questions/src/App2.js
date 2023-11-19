import { useState, useEffect } from "react";
function App() {
  const [state, setState] = useState(0);
  console.log(state); // 1. state의 초기값은 0이므로 0 출력

  useEffect(() => {
    setState(1); // 2 .setState(1)이 호출되면 상태가 변경되었지만,비동기적으로 이루어짐
    return () => {
      // 3. Cleanup 함수 실행
      // useEffect가 다시 실행되기 전에 호출됨,현재 실행 중인 useEffect에서의 state 값(여기서는 0)을 기억하고 있기 때문에, cleanup 함수가 호출될 때마다 0이 출력됩니다.
      console.log(state);
    }; ///즉,cleanup 함수가 호출될 때마다 현재 state 값이 아닌 이전 state 값인 0이 출력된다.
  }, [state]);
  return <div>hello world</div>;
}
export default App;
// 0 > 1 > 0 > 1
