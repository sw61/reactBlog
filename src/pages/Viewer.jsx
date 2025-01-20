import NavBar from './NavBar';
import styled from 'styled-components';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../fireBase';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { MdxComponents } from '../components/mdx';

const Viewer = () => {
  const [documents, setDocuments] = useState([]);
  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, '블로그1'));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
        console.log(`${doc.id} => `, doc.data());
      });
      console.log('Fetched documents:', docs);
      setDocuments(docs);
    } catch (e) {
      console.error('Error fetching documents: ', e);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <NavBar />
      <ViewerContainer>
        {documents.map((doc) => (
          <div key={doc.id}>
            <h1>{doc.title}</h1>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={MdxComponents}
            >
              {doc.content}
            </ReactMarkdown>
          </div>
        ))}
        <button onClick={getUsers}>테스트 버튼</button>
      </ViewerContainer>
    </>
  );
};

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
