import { useState, useEffect } from "react";
function App() {
  const [state, setState] = useState(0);
  const [value, setValue] = useState(0);
  console.log(value); // 0 > 0
  useEffect(() => {
    console.log("useEffect"); // 스트릭모드엔 두번실행됨
    setState(3);
    setValue(state); // 0
  }, []);
  return <div>hello world</div>;
}
export default App;
