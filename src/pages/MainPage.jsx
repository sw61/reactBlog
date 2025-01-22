import styled from 'styled-components';
import NavBar from './NavBar';
import BlogList from './BlogList';
import Footer from './Footer';

function MainPage() {
  return (
    <>
      <NavBar />
      <Container>
        <BlogList />
        <Footer />
      </Container>
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
