import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(false);
  const [counter, setConter] = useState(0);
  const [keyword, setKeyword] = useState("");

  // 새로운 컴포너트 !!컴포넌트는 단지 jsx를 return하는 함수임!!
  function Hello() {
    useEffect(() => {
      console.log("created!");
      return () => console.log("bye~"); //컴포넌트가 파과될때
    }, []); //컴포넌트가 처음 생성될 때만 실행된다,여기선 컴포넌트를 (destory)없애버리거나,생성하고있어서 버튼 누를때마다 출력
    return <h1>Hello</h1>;
  } //컴포넌트가 destory될 때 실행될 함수를 만들자.
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onClick = () => {
    setConter((prev) => prev + 1);
    setShowing((showing) => !showing);
  };

  console.log("i run all tne time"); //매번 실행됨

  useEffect(() => {
    console.log("i run only onec!!");
  }, []); //한번만 실행됨

  useEffect(() => {
    //keyword가 변화할때만 실행됨
    if (keyword !== "" && keyword.length > 6) {
      console.log("Search for", keyword);
    }
  });
  // useEffect(()=>{
  //   console.log('카운터 변경')
  // },[counter])
  // useEffect(()=>{
  //   console.log('카운터, 키워드 둘중 하나가 변경되고 있다')
  // },[keyword, counter])
  //=> keyword가 변화할 때 코드를 실행할 것!!
  //react에게 keyword를 지켜바라고 말해주는 것
  //keyword가 변화할 때만 코드를 실행하고싶음

  return (
    <div>
      {showing ? <Hello /> : null} {/*내가 만든 컴포넌트는 다 대문자여야함 */}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}> Click me</button>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {/*여기서의 태그들은 다 html태그들임 */}
    </div>
  );
}
//text를 prop으로서 전달해보자!

export default App;
