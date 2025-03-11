import { db } from '../fireBase'; // Firebase 설정 파일
import { doc, updateDoc } from 'firebase/firestore';

export const updatePost = async (postId, updatedData) => {
  try {
    const postRef = doc(db, '블로그포스트', postId); // 수정할 문서 참조
    await updateDoc(postRef, updatedData); // Firestore에 업데이트 요청
    console.log('Post updated successfully!');
  } catch (error) {
    console.error('Error updating post:', error);
  }
};
