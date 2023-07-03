import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './routes/Signup';
import Profile from './routes/Profile';
import ProtectedRoute from './authroute/ProtectedRoute';
import PublicRoute from './authroute/PublicRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<PublicRoute><Home /></PublicRoute>} />
          <Route path='/about' element={<PublicRoute><About /></PublicRoute>} />
          <Route path='/service' element={<PublicRoute><Service /></PublicRoute>} />
          <Route path='/contact' element={<PublicRoute><Contact /></PublicRoute>} />
          <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
