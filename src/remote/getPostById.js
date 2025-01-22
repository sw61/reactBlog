import { db } from '../fireBase';
import { doc, getDoc } from 'firebase/firestore';

export const getPostById = async (docId) => {
  try {
    const documentRef = doc(db, '블로그포스트', docId);
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      return { id: documentSnapshot.id, ...documentSnapshot.data() };
    } else {
      console.error('문서를 찾을 수 없습니다.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document: ', error);
  }
};
