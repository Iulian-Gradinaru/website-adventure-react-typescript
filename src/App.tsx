import { Navbar } from './components/NavBar/Navbar';
import './App.css';
import { Home } from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <--- Modificare aici
import { Services } from './components/pages/Services';
import { Products } from './components/pages/Products';
import { SignUp } from './components/pages/SignUp';

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};
