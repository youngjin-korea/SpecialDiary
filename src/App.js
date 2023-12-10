import DiaryEditor from "./pages/DiaryEditor";
import DiaryList from "./pages/DiaryList";
import "./App.css";
import React, { useRef, useEffect, useMemo, useCallback } from "react";
import { useRecoilState } from "recoil";
import { DiaryData } from "./recoil/atom";

function App() {
  const [data, setData] = useRecoilState(DiaryData);
  const dataId = useRef(0);

  const dummy = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((it) => it.json())
      .catch(console.error("error"));

    const SampleData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime,
        id: dataId.current++,
      };
    });
    setData(SampleData);
  };

  useEffect(() => {
    dummy();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
    };
    setData([newItem, ...data]);
    dataId.current += 1;
  }, []);

  const onDelete = useCallback((id) => {
    setData(data.filter((it) => it.id !== id));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  // data.length가 변할때만 return 윗 부분 다시 연산, data.length가 변하지 않으면 연산 없이 리턴값 계속 저장.
  // (memorization: 한번한 같은 연산의 값을 기억하고 있으며 변화가 없을 시 같은 값 재사용)

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  

  return (
    <div className="App">
      <DiaryEditor />
      <div className="Analysis">
        <div>
          전체 일기 개수: <span>{data.length}</span>
        </div>
        <div>
          기분 좋은 일기 개수: <span>{goodCount}</span>
        </div>
        <div>
          기분 나쁜 일기 개수: <span>{badCount}</span>
        </div>
        <div>
          기분 좋은 일기 비율: <span>{goodRatio}%</span>
        </div>
      </div>
      <DiaryList />
    </div>
  );
}

export default App;
