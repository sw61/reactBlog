import styled from 'styled-components';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Editor from './Editor';
import { auth } from '../fireBase';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('구글 로그인 성공');
      setIsLogin(true);
    } catch (error) {
      alert(`구글 로그인 실패 :{${error}}`);
    }
  };
  // 계정 별 설정이나 보여주는 페이지 설정 등등 해야됨.
  return (
    <>
      {isLogin ? (
        <Editor />
      ) : (
        <LoginContainer>
          <LoginModal>
            <EmailInput
              type="text"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <PasswordInput
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <AccountContainer>
              <LoginBtn onClick={handleGoogleLogin}>구글 로그인</LoginBtn>
              <CreateAccountBtn onClick={handleSignUp}>
                회원가입
              </CreateAccountBtn>
            </AccountContainer>
          </LoginModal>
        </LoginContainer>
      )}
    </>
  );
}
export default LoginPage;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const AccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LoginModal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 300px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
`;
const EmailInput = styled.input`
  padding: 10px 20px;
`;
const PasswordInput = styled.input`
  padding: 10px 20px;
`;
const LoginBtn = styled.button``;
const CreateAccountBtn = styled.button``;
