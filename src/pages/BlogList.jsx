import styled from 'styled-components';
function BlogList({ blog }) {
  const { id, imgUrl, title } = blog;
  return (
    <>
      <ListContainer>
        <BlogImg src={imgUrl}></BlogImg>
        <div>{title}</div>
        <div>코멘트</div>
        <div>날짜</div>
      </ListContainer>
    </>
  );
}
export default BlogList;
const BlogImg = styled.img`
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
