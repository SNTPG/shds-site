import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Tablet from './pages/Tablet.js';
import ScrollToTop from './components/ScrollToTop.js';

function App() {
  return (
      <header className="App-header">
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Tablet/>}/>
          </Routes>
        </BrowserRouter>
      </header>
  );
}

export default App;
