import React, { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({ author: "", content: "", emotion: 1 });

  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    alert("저장 성공!");
    console.log(state);
  };
  return (
    <div className="DiaryEditor">
      <h2>일기 쓰기 🔑</h2>
      <div>
        <input
          placeholder="이름"
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          placeholder="내용"
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정점수: </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>제출하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
