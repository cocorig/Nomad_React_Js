import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

export default function CarouselItem() {
  //처음 active되는 item의 index
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 35;
  return (
    <div style={{ width: 390 }}>
      <ul style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          //다음 아이템이 보이게
          showSlither={true}
          // 반복할 아이템
          // 필수값
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          // 아이템 사이 간격
          gutter={5}
          // 화살표 모양
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          // 화살표 안쪽
          outsideChevron
          // 오른쪽 , 왼쪽 화살표 넓이값
          chevronWidth={chevronWidth}
          //defalut =  3
          numberOfCards={3}
          // 몇개의 아이템을 넘길것인지 설정, 보통 numberOfCards와 같은 값을 줌
          slidesToScroll={3}
          style={{ padding: `0 ${chevronWidth}px`, width: "100%" }}
        >
          <li style={{ height: 200, background: "#EEE" }}>First card</li>
          <li style={{ height: 200, background: "#EEE" }}>Second card</li>
          <li style={{ height: 200, background: "#EEE" }}>Third card</li>
          <li style={{ height: 200, background: "#EEE" }}>Fourth card</li>
          <li style={{ height: 200, background: "#EEE" }}>First card</li>
          <li style={{ height: 200, background: "#EEE" }}>Second card</li>
          <li style={{ height: 200, background: "#EEE" }}>First card</li>
          <li style={{ height: 200, background: "#EEE" }}>Second card</li>
          <li style={{ height: 200, background: "#EEE" }}>Third card</li>
          <li style={{ height: 200, background: "#EEE" }}>Fourth card</li>
        </ItemsCarousel>
      </ul>
    </div>
  );
}
