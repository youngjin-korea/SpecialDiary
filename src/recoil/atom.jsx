import { atom } from "recoil";

export const DiaryData = atom({
  key: "DiaryData",
  default: [],
});

// <데이터 전역에서 사용하는 법>
// const [text, setText] = useRecoilState(textState);
