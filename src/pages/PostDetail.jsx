// 라이브러리 및 firebase 연동
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
// 컴포넌트
import './MarkdownStyle.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
// markdown -> HTML 변환
import { unified } from 'unified';
import remarkParse from 'remark-parse';
// Markdown style
import { MdxComponents } from '../components/mdx';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { getPostById } from '../remote/getPostById';
import { updatePost } from '../remote/updatePost';

function PostDetail() {
  const { id } = useParams(); // URL에서 id 값 가져오기
  const [documents, setDocuments] = useState([]); // Firebase 필드 내용들 저장
  const [headings, setHeadings] = useState([]); // documents에서 제목만 추출 후 저장

  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = await getPostById(id); // Firebase에서 데이터 가져오기
      setDocuments([fetchedPost]); // 배열로 처리 해줌
    }
    fetchPost();
  }, [id]);

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
  console.log(headings);

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
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={MdxComponents}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
                className={'markdown'}
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
export default PostDetail;
const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
