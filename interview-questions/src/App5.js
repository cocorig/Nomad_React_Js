import React, { useEffect } from "react";
function App() {
  // 시맨틱 태그를 알고있는지

  // display : block;
  // w,h 지정가능
  // 바닐라 자바스크립트 : document , window ,원시 자료형에 대한 기본적 메소드
  // Number -> String
  // NaN
  String(100); // 강제 형변환
  //Array.prototype
  console.log(Array.prototype); // 몇개나 설명가능한지, 잘 사용할수있냐
  // 원본 배열에 영향을 주느냐
  // 원본을 리턴하는건지 , 리턴을 안하는건지,  원본배열에 영향을 받은걸 리턴하는지
  const mapA = [1, 2, 3].map(() => 1);
  const forEachA = [1, 2, 3].forEach(() => 1);
  console.log(mapA); // [1, 1, 1]
  console.log(forEachA); // undefined, 아무 값도 할당되지 않고 반환하지 않기 때문에 undefined이 된다.

  // map은  해당 함수의 반환값으로 새로운 배열을 생성

  // forEach는 map, filter, reduce 등의 배열 메서드와 달리 새로운 배열을 반환하지 않고, 요소를 직접 수정하거나 다른 배열로 변환하지 않으므로, 변형된 배열이나 특정 조건을 가진 요소를 골라내는 등의 작업에는 다른 배열 메서드들이 더 적합할 수 있다.

  const sliceA = [1, 2, 3].slice(); // slice는 필요한 부분만 잘라서 사용할 때,전체 배열을 복사하여 새로운 배열을 반환
  const spliceA = [1, 2, 3].splice(); // splice는 넣거나 뺄 때, // [] - 아무것도 제거하지 않으므로 빈 배열을 반환

  console.log(sliceA, spliceA);

  const originalArray = [1, 2, 3, 4, 5];

  // slice()를 사용하여 일부분을 추출한 새로운 배열을 반환
  const slicedArray = originalArray.slice(1, 4); // 시작 인덱스 1부터 4 전까지의 요소를 추출
  console.log(slicedArray); // 출력: [2, 3, 4]
  console.log(originalArray); // 원본배열 영향 x
  // splice()를 사용하여 원본 배열을 변경하고, 제거된 요소를 포함한 새로운 배열을 반환
  const splicedArray = originalArray.splice(1, 2); // 시작 인덱스 1부터 2개의 요소를 제거
  console.log(splicedArray); // 출력: [2, 3] - 제거된 요소를 반환
  console.log(originalArray); // 출력: [1, 4, 5] - 원본 배열이 변경됨

  // webpack
  // babel
  // spa의 작동원리
  // redux의 작동원리 - 대표적인 구성요소
  // 상태관리도구
  // flux패턴
  // HTTP 통신
  // GET , PATCH , PUT , DELETE , POST
  // GET은 응답,요청할 때 payload, body가 존재하냐, 어떻게 존재하냐
  // DELETE는 body가 존재하나요? no
  // PATCH , PUT 차이점
  // PATCH , PUT , DELETE 왜 안쓸까? 써야지이
  // CRUD 프론트에서 status code만으로 개선가능
  // status code 100 ~200 대는 무슨 뜻일까
  return (
    <>
      <div></div>
      <header></header>
      <footer></footer>
      <main></main>
      <section></section>
      <article></article>
    </>
  );
}

export default App;
