import { createContext } from "react";

//  context 만들려면 createContext를 import
export const ThemeContext = createContext(null);

// context의 초기값은 value가 없을 때 필요하다
// 만약 상위 레벨에 매칭되는 Propvider가 없다면 기본값이 사용된다.
// 기본 값으로 undefined를 넣으면 기본값이 사용되지않는다.

