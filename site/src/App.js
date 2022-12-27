import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Tablet from './pages/Tablet.js';
import Landing from './pages/Landing.js';
import Cast  from './pages/Cast.js';
import Card from './components/Card.js';
import ScrollToTop from './components/ScrollToTop.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Tablet><Cast/></Tablet>}/>
            <Route path="cast" element={<Landing/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
