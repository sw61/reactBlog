import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    alert('구글 로그인 성공');
    return true;
  } catch (error) {
    alert(`구글 로그인 실패 :{${error}}`);
  }
};
