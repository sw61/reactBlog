import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import styled from 'styled-components';
import { Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../NavBar';
function Editor() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const handleSave = () => {
    localStorage.setItem('markdownValue', value); // LocalStorage에 저장
    navigate('/view'); // 보기 페이지로 이동
  };
  return (
    <>
      <NavBar />
      <EditContainer>
        <div data-color-mode="dark">
          <MDEditor
            height={550}
            autoFocus={false}
            value={value}
            onChange={setValue}
          />
        </div>
        <SaveBtn onClick={handleSave}>
          <Save />
        </SaveBtn>
      </EditContainer>
    </>
  );
}

export default Editor;
const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
`;
const SaveBtn = styled.button``;
