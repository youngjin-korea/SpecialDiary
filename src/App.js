import DiaryEditor from "./pages/DiaryEditor";
import DiaryList from "./pages/DiaryList";
import "./App.css";
import { useState, useRef } from "react";

// const dummyData = [
//   {
//     id: 1,
//     author: "kim",
//     content: "HI",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "kim",
//     content: "HI",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "kim",
//     content: "HI",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "kim",
//     content: "HI",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 5,
//     author: "kim",
//     content: "HI",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 6,
//     author: "kim",
//     content: "HI",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
