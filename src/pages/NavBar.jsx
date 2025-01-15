import styled from 'styled-components';
import { Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate();
  const homeNav = () => {
    navigate('/home');
  };
  const contentNav = () => {
    navigate('/content');
  };
  const editNav = () => {
    navigate('/edit');
  };
  const viewNav = () => {
    navigate('/view');
  };
  return (
    <>
      <NavContainer>
        <NavTitle onClick={homeNav}>SW's Blog</NavTitle>
        <NavBtnContainer>
          <NavBtn onClick={homeNav}>home</NavBtn>
          <NavBtn onClick={contentNav}>content</NavBtn>
          <NavBtn onClick={editNav}>edit</NavBtn>
          <NavBtn onClick={viewNav}>view</NavBtn>
          <NavBtn>
            <Moon />
          </NavBtn>
        </NavBtnContainer>
      </NavContainer>
    </>
  );
}
export default NavBar;
const NavContainer = styled.div`
  display: flex;
  position: fixed;
  background-color: white;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  padding: 15px;
  justify-content: space-around;
  border-bottom: 1px solid grey;
`;
const NavBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
`;
const NavBtnContainer = styled.div`
  display: flex;
`;
const NavTitle = styled.button`
  display: flex;
  align-items: center;
  font-weight: bolder;
  background-color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
