import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 제공자가 스토어를 제공하면 전체 앱 구성요소를 래핑할 수 있다.
import { Provider } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 이제 컴포넌트 store에 접근할 수 있게된다.
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
//8. Provider은 이 저장소인 Prop을 포함하게 된다.


