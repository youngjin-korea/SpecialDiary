import React, { useRef, useState } from "react";

const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);

  const localInputRef = useRef();

  const handleQuitEdit = () => {
    setIsEdit(!isEdit);
    setLocalContent(content);
  };

  const handleDelete = () => {
    if (window.confirm(`${id}번째 게시물을 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localInputRef.current.focus();
      return;
    }
    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      setIsEdit(!isEdit);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>

      {isEdit ? (
        <div>
          <textarea
            ref={localInputRef}
            value={localContent}
            onChange={(e) => {
              setLocalContent(e.target.value);
            }}
          />
        </div>
      ) : (
        <div className="content">{content}</div>
      )}
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={handleDelete}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
