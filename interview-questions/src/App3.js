import { useState, useEffect } from "react";
function App() {
  const [state, setState] = useState(0);
  console.log(state); // 0 > 3 > 3
  useEffect(() => {
    setState(1); // setState 는 async
    console.log(state);
    setState(2);
    console.log(state);
    setState(3);
    console.log(state);
  }, [state]);
  return <div>hello world</div>;
}
export default App;

// 0 > 0 > 0 >  0 >  3 > 3 > 3 > 3 > 3
