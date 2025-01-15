import styled from 'styled-components';
import NavBar from './NavBar';

function BlogContent() {
  return (
    <>
      <NavBar />
      <ContentContainer>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
        <div>내용 불러오기</div>
      </ContentContainer>
    </>
  );
}
export default BlogContent;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
`;
