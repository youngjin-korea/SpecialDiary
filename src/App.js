import DiaryEditor from "./pages/DiaryEditor";
import DiaryList from "./pages/DiaryList";
import "./App.css";

const dummyData = [
  {
    id: 1,
    author: "kim",
    content: "HI",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "kim",
    content: "HI",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "kim",
    content: "HI",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "kim",
    content: "HI",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "kim",
    content: "HI",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 6,
    author: "kim",
    content: "HI",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyData} />
    </div>
  );
}

export default App;
