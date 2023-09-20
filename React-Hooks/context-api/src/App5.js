import React, { createContext, useContext, useState } from 'react';

const modalStyles = {
  modalContainer: {
    textAlign: 'center',
    marginTop: '50%',
    
  },
  h1 : {
    marginBottom : '20px',
  },
  modal: {
    marginTop: '20px',
  }
};

// 모달 상태를 관리하는 컨텍스트 생성
const ModalContext = createContext();

// 모달을 토글하기 위한 컴포넌트
const ModalToggleButton = () => {
  // ModalContext에서 모달 상태와 토글 함수 가져오기
  const [isModalOpen, setIsModalOpen] = useContext(ModalContext);

  return <button onClick={() => setIsModalOpen(!isModalOpen)}>모달 토글</button>;
};

// 모달을 렌더링하는 컴포넌트
const Modal = () => {
  // ModalContext에서 모달 상태 가져오기
  const [isModalOpen] = useContext(ModalContext);

  return isModalOpen ? <div style={modalStyles.modal}>모달입니다</div> : null;
};

// 모달 컨텍스트를 제공하는 상위 컴포넌트
const ModalProvider = ({ children }) => {
  // 모달 상태를 관리하는 상태와 토글 함수를 생성
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // ModalContext.Provider로 모달 상태와 토글 함수를 하위 컴포넌트에 전달
    <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
      {children}
    </ModalContext.Provider>
  );
};

// App 컴포넌트에서 ModalProvider를 사용하여 모달 관리
const App = () => {
  return (
    <ModalProvider>
      <div style={modalStyles.modalContainer}>
        <h1 style={modalStyles.h1}>모달 예제</h1>
        <ModalToggleButton />
        <Modal />
      </div>
    </ModalProvider>
  );
};

export default App;
