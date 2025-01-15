import styled from 'styled-components';
import NavBar from './NavBar';
import BlogList from './BlogList';
import Footer from './Footer';

function MainPage() {
  const blog = [
    {
      id: 0,
      imgUrl: '/image/cat1.jpg',
      title: '제목1',
    },
    { id: 1, imgUrl: '/image/cat2.jpg', title: '제목2' },
    { id: 2, imgUrl: '/image/cat3.jpg', title: '제목3' },
    { id: 3, imgUrl: '/image/cat2.jpg', title: '제목3' },
    { id: 4, imgUrl: '/image/cat1.jpg', title: '제목3' },
    { id: 5, imgUrl: '/image/cat3.jpg', title: '제목3' },
    { id: 6, imgUrl: '/image/cat1.jpg', title: '제목3' },
    { id: 7, imgUrl: '/image/cat3.jpg', title: '제목3' },
  ];
  return (
    <>
      <NavBar />
      <Container>
        <MainTitle>React Blog</MainTitle>
        <MainContainer>
          {blog.map((blog) => (
            <BlogList key={blog.id} blog={blog} />
          ))}
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
}
export default MainPage;
const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right: auto;
`;
const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 60px;
`;
