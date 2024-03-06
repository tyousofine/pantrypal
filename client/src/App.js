
import './styles/index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LandingPage from './pages/Landing';
import InputPage from './pages/InputPage';
import GalleryPage from './pages/Gallery';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path='/generate' element={<InputPage />}></Route>
          <Route path='/gallery' element={<GalleryPage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
