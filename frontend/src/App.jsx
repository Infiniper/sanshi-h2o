import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Navbar from './components/navbar/navbar.jsx'; // Example navbar component
import Footer from './components/footer/footer.jsx';
import Home from './pages/Home/Home.jsx'; // Example page component
import Products from './pages/products.jsx'; // Example page component
import About from './pages/About'; // Example page component
import Contact from './pages/Contact'; // Example page component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App

