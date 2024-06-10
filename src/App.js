import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Nav from './Portfolio/Nav';
import Home from './Portfolio/Home';
import Catalog from './Portfolio/Catalog';
import Resume from './Portfolio/Resume';
import Contact from './Portfolio/Contact';
import Footer from './Portfolio/Footer';
import Animated from './Portfolio/Animated';
import PageNotFound from './Portfolio/Pagenotfound';

function App() {
  const location = useLocation();

  // Define all valid paths
  const validPaths = ['/', '/home', '/catalog', '/resume', '/contact'];

  // Check if the current path is valid
  const isValidPath = validPaths.includes(location.pathname);

  return (
    <div>
      {isValidPath && <Nav />}
      <Routes>
        <Route path='/' element={<Animated />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {isValidPath && <Footer />}
    </div>
  );
}

export default App;
