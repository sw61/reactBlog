import styled from 'styled-components';
function Footer() {
  return (
    <>
      <FootContainer>
        <div>sw's blog</div>
        <div>contact</div>
        <div>Footer</div>
      </FootContainer>
    </>
  );
}
export default Footer;

const FootContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px;
`;
