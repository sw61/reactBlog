import { db } from '../fireBase';
import { collection, getDocs } from 'firebase/firestore';

// 포스트 관련 리모트 함수 정의
export const getAllPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, '블로그포스트'));
    const docs = [];

    // querySnapshot for문을 돌릴 수 있는 데이터 타입
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });

    return docs;
  } catch (error) {
    console.error('Error fetching documents: ', error);
  }
};
