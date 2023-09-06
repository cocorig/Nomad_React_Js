//1. redux 가져오기 
import {createStore } from "redux";

//  3. reducer함수 생성 매개변수 (우리가 제공할 상태 , action은 두가지 속성을 가짐)
// 여기에 state를 보관
const counter =  0;
// state 수정방법을 적는다(Reducer)
// 컴포넌트 요청에 따라 다른 action을 취함
function reducer(state = counter , action){
  if(action.type === '증가'){
    state++;
    return state;
  }else if(action.type === '감소'){
    state--;
    return state;
  }else{
    return state
  }
}
let store = createStore(reducer)
export default store;

// 4. app.js 파일에 카운터를 생성하고 스토어 사용을 하기위해 root 파일인 index.js로 이동한다.
// 5, store를 제공해야 하므로  어플리케이션에 포함된 전체 애플리케이션에 스토어를 제공해야한다.
//  따라서 기본 애플리케이션 컴포넌트가 되며, store를 포함하게 된다.
// 모든 컴포넌트 파일은 index.js파일은 React 저장소에 접근할 수 있다.
//6 . store을 내보내 index.js에서 store를 가져오기위해 export default store를 해준다