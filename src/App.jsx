import './App.css';
import MainPage from './pages/MainPage';
import Editor from './pages/Editor';
import Viewer from './pages/Viewer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TestView from './pages/TestView';
import PostDetail from './pages/TestView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit" element={<Editor />} />
          <Route path="/view" element={<Viewer />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
