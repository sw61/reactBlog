import styled from 'styled-components';
import NavBar from './NavBar';
import MDEditor from '@uiw/react-md-editor';

function BlogContent() {
  const md = `
# This is a H111111111111111111111
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

1. first
2. second
3. third

* 안녕하세요.
* hi
* 하이
`;
  return (
    <>
      <NavBar />
      <ContentContainer>
        <div
          className="markdownDiv"
          data-color-mode="light"
          style={{ padding: 15 }}
        >
          <MDEditor.Markdown style={{ padding: 30 }} source={md} />
        </div>
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
