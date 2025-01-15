import { useState } from 'react';
import NavBar from '../NavBar';
import styled from 'styled-components';
import React from 'react';
function WritePage() {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSave = () => {};

  return (
    <>
      <NavBar />
      <WriteContainer>
        <TitleContainer>
          <div>제목</div>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            onChange={onChange}
          ></input>
        </TitleContainer>
        <TextAreaContainer>
          <div>내용</div>
          <textarea
            rows={10}
            cols={30}
            placeholder="내용을 입력하세요"
            onChange={onChange}
          ></textarea>
        </TextAreaContainer>
        <button onClick={onSave}>저장</button>
      </WriteContainer>
    </>
  );
}
export default WritePage;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
const TitleContainer = styled.div`
  display: flex;
`;
const TextAreaContainer = styled.div`
  display: flex;
`;
