import MDEditor from '@uiw/react-md-editor';
import NavBar from '../NavBar';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Viewer = (props) => {
  const content =
    localStorage.getItem('markdownContent') || 'No content saved!';
  return (
    <>
      <NavBar />
      <ViewerContainer>
        <div style={{ padding: '20px' }}>
          <h1>Markdown Viewer</h1>
          <ReactMarkdown>{content}</ReactMarkdown>
          <button
            onClick={() => navigate('/')}
            style={{ marginTop: '20px', padding: '10px 20px' }}
          >
            Back to Editor
          </button>
        </div>
      </ViewerContainer>
    </>
  );
};

export default Viewer;
const ViewerContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
`;
