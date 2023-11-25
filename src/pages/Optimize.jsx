import React, { useEffect, useState } from "react";

const Count = React.memo(({ count }) => {
  useEffect(() => {
    console.log("up contcom");
  });
  return <div>{count}</div>;
});

const Text = ({ text }) => {
  useEffect(() => {
    console.log("up textcom");
  });
  return <div>{text.count}</div>;
};
const AreEqual = (a, b) => {
  return a.text.count === b.text.count;
};
const Compare = React.memo(Text, AreEqual);

const Optimize = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState({ count: 1 });
  return (
    <div style={{ padding: "50px" }}>
      <div>
        <h2>count</h2>
        <Count count={count} />
        <button
          onClick={() => {
            setCount(count);
          }}
        >
          +
        </button>
      </div>
      <div>
        <h2>text</h2>
        <Compare text={text} />
        <button onClick={() => setText({ count: 1 })}>T</button>
      </div>
    </div>
  );
};

export default Optimize;
