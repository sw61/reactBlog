import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../remote/post';

function BlogList() {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();
  const pathNav = (path) => {
    navigate(path);
  };
  // 전체 포스트 목록 가져오기
  useEffect(() => {
    const handleGetAllPosts = async () => {
      const result = await getAllPosts();
      setDocuments(result);
    };

    handleGetAllPosts();
  }, []);
  return (
    <>
      {documents.length > 0 ? (
        documents.map((doc) => (
          <PostContainer key={doc.id}>
            <BlogImg src={doc.imgUrl}></BlogImg>
            <TextContainer>
              <TitleText>{doc.title}</TitleText>
              <ComentText>{doc.comment}</ComentText>
              <UploadText>25.01.21</UploadText>
            </TextContainer>
          </PostContainer>
        ))
      ) : (
        <>지금 값 아직 설정안됨</> // 렌더링 되기전 spinner 등으로 채우기
      )}
    </>
  );
}
export default BlogList;
const BlogImg = styled.img`
  width: 300px;
  height: 200px;
`;
const PostContainer = styled.div`
  width: 800px;
  display: flex;
  padding: 0 7px 30px 7px;
  cursor: pointer;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 30px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
`;
const TitleText = styled.div`
  font-weight: bold;
  font-size: 25px;
  padding-bottom: 2px;
`;
const ComentText = styled.div`
  font-size: 18px;
`;
const UploadText = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #d0d1d4;
  font-size: 14px;
`;
