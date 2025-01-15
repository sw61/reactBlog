import './App.css';
import MainPage from './pages/MainPage';
import BlogContent from './pages/BlogContent';
import WritePage from './pages/Write/WritePage';
import Editor from './pages/Write/Editor';
import Viewer from './pages/Write/Viewer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Minju from './pages/Write/minju';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/content" element={<BlogContent />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/edit" element={<Editor />} />
          <Route path="/view" element={<Viewer />} />
          <Route path="/test" element={<Minju />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
