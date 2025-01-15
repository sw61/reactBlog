import './App.css';
import MainPage from './pages/MainPage';
import BlogContent from './pages/BlogContent';
import WritePage from './pages/Write/WritePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/content" element={<BlogContent />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
