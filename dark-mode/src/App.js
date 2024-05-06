import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import NavBar from './components/navbar';
import { ThemeProvide } from './theme-context';
import './App.css'


function App() {
  return (
    <ThemeProvide>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvide>

  );
}

export default App;
