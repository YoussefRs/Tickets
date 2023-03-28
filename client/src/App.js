import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { toastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={ <Home /> } />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
