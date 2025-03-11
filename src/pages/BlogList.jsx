import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../remote/getAllPosts';
import { BeatLoader } from 'react-spinners';

function BlogList() {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const postPathNav = (id) => {
    navigate(`/post/${id}`);
  };

  // 전체 포스트 목록 가져오기
  useEffect(() => {
    const handleGetAllPosts = async () => {
      setIsLoading(true);
      const result = await getAllPosts();
      setDocuments(result);
      setIsLoading(false);
    };
    handleGetAllPosts();
  }, []);

  // Spinner
  if (isLoading === true) {
    return (
      <Spinner>
        <BeatLoader />
      </Spinner>
    );
  }

  return (
    <>
      {documents.map((doc) => (
        <PostContainer key={doc.id} onClick={() => postPathNav(doc.id)}>
          <BlogImg src={doc.imgUrl}></BlogImg>
          <TextContainer>
            <TitleText>{doc.title}</TitleText>
            <UploadText>{doc.date}</UploadText>
          </TextContainer>
        </PostContainer>
      ))}
    </>
  );
}

export default BlogList;
const PostContainer = styled.div`
  display: flex;
  gap: 20px; // 간격 조절
  padding: 0 7px 30px 7px;
  cursor: pointer;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 30px;
`;

const BlogImg = styled.img`
  width: 266px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #f0f0f0;
  flex-shrink: 0;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
`;

const TitleText = styled.div`
  font-weight: bold;
  font-size: 38px;
  padding-bottom: 2px;
`;

const ComentText = styled.div`
  font-size: 18px;
`;

const UploadText = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #d0d1d4;
  font-size: 16px;
`;
const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
