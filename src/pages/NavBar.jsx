import styled from 'styled-components';
import { Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate();
  const pathNav = (path) => {
    navigate(path);
  };

  return (
    <>
      <NavContainer>
        <NavTitle onClick={() => pathNav('/home')}>SW's Blog</NavTitle>
        <NavBtnContainer>
          <NavBtn onClick={() => pathNav('/home')}>home</NavBtn>
          <NavBtn onClick={() => pathNav('/edit')}>edit</NavBtn>
          <NavBtn onClick={() => pathNav('/view')}>view</NavBtn>
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
  border-bottom: 1px solid #e5e7eb;
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
