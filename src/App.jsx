import './App.css';
import MainPage from './pages/MainPage';
import Editor from './pages/Editor';
import Viewer from './pages/Viewer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/edit" element={<Editor />} />
          <Route path="/view" element={<Viewer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
