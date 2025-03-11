import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Editor from './pages/Editor';
import Viewer from './pages/Viewer';
import PostDetail from './pages/PostDetail';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit" element={<Editor />} />
          <Route path="/view" element={<Viewer />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
