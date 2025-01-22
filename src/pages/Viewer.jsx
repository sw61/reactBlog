// 라이브러리 및 firebase 연동
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// 컴포넌트
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
// markdown -> HTML 변환
import { unified } from 'unified';
import remarkParse from 'remark-parse';
// Markdown style
import { MdxComponents } from '../components/mdx';
import rehypeSlug from 'rehype-slug';
import { getAllPosts } from '../remote/post';

function Viewer() {
  const [documents, setDocuments] = useState([]);
  const [headings, setHeadings] = useState([]);

  // 전체 포스트 목록 가져오기
  useEffect(() => {
    const handleGetAllPosts = async () => {
      const result = await getAllPosts();
      setDocuments(result);
    };

    handleGetAllPosts();
  }, []);

  // 제목 추출
  useEffect(() => {
    if (documents.length > 0) {
      const allHeadings = [];

      documents.forEach((doc) => {
        const processor = unified().use(remarkParse);
        const tree = processor.parse(doc.content);

        // Markdown AST에서 제목 추출
        tree.children.forEach((node) => {
          if (node.type === 'heading') {
            allHeadings.push({
              level: `h${node.depth}`,
              text: node.children
                .filter((child) => child.type === 'text')
                .map((child) => child.value)
                .join(' '),
            });
          }
        });
      });

      setHeadings(allHeadings);
    }
  }, [documents]);

  // 1. firebase에서 글 상세 내용 가져오기
  // 2. string로 들어오는거 html로 변환
  // 3. html에서 태그 찾아서 toc에 추가

  // 이 컴포넌트가 렌더링 됐을때 useState([]) 로 초기화가됨
  // useEffect가 실행이 되어서 useState([여기 안에 값이 차겠지?])
  // state값이 바뀌었으니까 이 state를 사용하는 부분이 리렌더링이 일어남

  return (
    <>
      <NavBar /> {headings.length > 0 && <SideBar headings={headings} />}
      <ViewerContainer>
        {documents.length > 0 ? (
          documents.map((doc) => (
            <div key={doc.id}>
              <h1>{doc.title}</h1>
              <img width={'800px'} height={'600px'} src={doc.imgUrl}></img>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={MdxComponents}
                rehypePlugins={[rehypeSlug]}
              >
                {doc.content}
              </ReactMarkdown>
            </div>
          ))
        ) : (
          <>지금 값 아직 설정안됨</> // 렌더링 되기전 spinner 등으로 채우기
        )}
      </ViewerContainer>
      <Footer />
    </>
  );
}

export default Viewer;
const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
`;
