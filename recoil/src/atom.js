import { atom } from "recoil";
// countState 전역상태
export const countState = atom({
  key: "count",
  default: 10,
});
