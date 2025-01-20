import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import styled from 'styled-components';
import { Save } from 'lucide-react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../fireBase';

import NavBar from './NavBar';
function Editor() {
  const [value, setValue] = useState();
  const [title, setTitle] = useState();

  const addContent = async () => {
    try {
      // 테스트 가 collection 이름
      // addDoc은 아이디 이름 지정X setDoc으로는 아이디 이름 지정 가능.
      // 아래 내용은 필드 내용들
      const saveDoc = await addDoc(collection(db, '블로그1'), {
        title: title,
        content: value,
      });
      console.log('Document written with ID: ', saveDoc.id);
      console.log(saveDoc);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleSave = () => {
    addContent();
    console.log(value);
  };
  return (
    <>
      <NavBar />
      <EditContainer>
        <TitleInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        ></TitleInput>
        <div data-color-mode="light">
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
const SaveBtn = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;
const TitleInput = styled.input`
  padding: 10px 0px;
`;
