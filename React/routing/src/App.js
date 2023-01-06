
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className='links'>Homepage</Link>
        <Link to="/about" className='links'>About me</Link>
        <Link to='/contact' className='links'>Contact me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutme />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>

  );
}

export default App;
