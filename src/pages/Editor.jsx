import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import styled from 'styled-components';
import { Save } from 'lucide-react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../fireBase';
import NavBar from './NavBar';
import Footer from './Footer';

function Editor() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [comment, setComment] = useState('');

  const addContent = async () => {
    try {
      // 테스트 가 collection 이름
      // addDoc은 아이디 이름 지정X setDoc으로는 아이디 이름 지정 가능.
      // 아래 내용은 필드 내용들
      const now = new Date(); // 작성 버튼 누른 날짜 기준으로 2025년 1월 22일이면 25.01.22 이렇게 출력.
      const formattedDate = `${String(now.getFullYear()).slice(-2)}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
      const saveDoc = await addDoc(collection(db, '블로그포스트'), {
        title: title,
        imgUrl: imgUrl,
        comment: comment,
        content: value,
        date: formattedDate,
      });
      console.log('Document written with ID: ', saveDoc.id);
      console.log(saveDoc());
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    alert('저장되었습니다.');
  };

  const handleSave = () => {
    {
      value.length > 0 &&
      title.length > 0 &&
      imgUrl.length > 0 &&
      comment.length > 0
        ? addContent()
        : alert('내용을 다 채워주세요.');
    }
    setValue('');
    setTitle('');
    setImgUrl('');
    setComment('');
  };
  return (
    <>
      <NavBar />
      <EditContainer>
        <TitleInput
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="제목을 입력하세요"
        />
        <ImgUrlInput
          type="text"
          value={imgUrl}
          onChange={(event) => setImgUrl(event.target.value)}
          placeholder="IMG 링크를 입력하세요"
        />
        <CommentInput
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Comment 내용을 입력하세요"
        />
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
      <Footer />
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
  margin-top: 100px;
`;
const SaveBtn = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;
const TitleInput = styled.input`
  padding: 10px 0px;
`;
const ImgUrlInput = styled.input`
  padding: 10px 0px;
`;
const CommentInput = styled.input`
  padding: 10px 0px;
`;
