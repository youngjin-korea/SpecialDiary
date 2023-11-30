import DiaryEditor from "./pages/DiaryEditor";
import DiaryList from "./pages/DiaryList";
import "./App.css";
import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
} from "react";

//
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

export const DiaryDataContext = React.createContext();
export const MemoizedDispatched = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const dummy = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((it) => it.json())
      .catch(console.error("error"));

    const Data = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime,
        id: dataId.current++,
      };
    });

    dispatch({ type: "INIT", data: Data });
    // setData(Data);
  };

  useEffect(() => {
    dummy();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({ type: "DELETE", id });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
    // setData((data) =>
    //   data.map((it) =>
    //     it.id === targetId ? { ...it, content: newContent } : it
    //   )
    // );
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

  const memoizedDispatched = useMemo(() => {
    return { onCreate, onDelete, onEdit };
  }, []);

  return (
    <DiaryDataContext.Provider value={data}>
      <MemoizedDispatched.Provider value={memoizedDispatched}>
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
      </MemoizedDispatched.Provider>
    </DiaryDataContext.Provider>
  );
}

export default App;
