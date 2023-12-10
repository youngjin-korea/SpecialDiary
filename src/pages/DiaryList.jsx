import DiaryItem from "./DiaryItem";
import { useRecoilState } from "recoil";
import { DiaryData } from "../recoil/atom";

const DiaryList = () => {
  const [data, setData] = useRecoilState(DiaryData);

  return (
    <div className="DiaryList">
      <h2>나의 일기 리스트</h2>
      <h4>{data.length}개의 일기가 있습니다.</h4>
      <div>
        {data.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
