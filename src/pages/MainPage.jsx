import styled from 'styled-components';
import NavBar from './NavBar';
import BlogList from './BlogList';
import Footer from './Footer';

function MainPage() {
  const blog = [
    {
      id: 0,
      imgUrl: '/image/tton.jpg',
      title: '언또니',
    },
    { id: 1, imgUrl: '/image/tton.jpg', title: '언또니' },
    { id: 2, imgUrl: '/image/tton.jpg', title: '언또니' },
    { id: 3, imgUrl: '/image/tton.jpg', title: '언또니' },
    { id: 4, imgUrl: '/image/tton.jpg', title: '언또니' },
    { id: 5, imgUrl: '/image/tton.jpg', title: '언또니' },
  ];
  return (
    <>
      <NavBar />
      <Container>
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
