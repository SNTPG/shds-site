import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
            <Route path="/" element={<Landing/>}/>
            <Route path="cast" element={<Cast/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
