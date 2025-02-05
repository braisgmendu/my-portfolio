import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
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
        </div>
      </Router>
    </div>
  );
}

export default App;