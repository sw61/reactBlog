import styled from 'styled-components';
import './SideBar.css';

function SideBar({ headings }) {
  return (
    <>
      <SideContainer>
        {headings.map((headings, index) => (
          <div
            key={index}
            id={headings.text.replace(/\s+/g, '-')}
            className={`heading-${headings.level}`}
          >
            <a href={`#${headings.text.replace(/\s+/g, '-')}`}>
              {headings.text}
            </a>
          </div>
        ))}
      </SideContainer>
    </>
  );
}
export default SideBar;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  position: sticky;
  border-left: 4px solid #e5e7eb;
  width: 150px;
  top: 200px;
  left: 50px;
`;
