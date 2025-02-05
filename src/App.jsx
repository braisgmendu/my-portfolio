import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/MyPortfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import "./App.css";

function App() {
  return (
    <div className='App '>
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <Home />
              } />
              <Route path='*' element={
                <div>404 Not Found </div>
              }></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;