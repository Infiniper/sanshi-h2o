import { useEffect } from 'react'; // <-- 1. IMPORT USEEFFECT
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Navbar from './components/navbar/navbar.jsx'; // Example navbar component
import Footer from './components/footer/footer.jsx';
import Home from './pages/Home/Home.jsx'; // Example page component
import Products from './pages/products.jsx'; // Example page component
import About from './pages/About'; // Example page component
import Contact from './pages/Contact'; // Example page component
import { supabase } from './lib/supabaseClient.js'; // <-- 2. IMPORT SUPABASE

function App() {
  // 3. ADD THE TEST CODE INSIDE USEEFFECT
  useEffect(() => {
    // This is the test function from the instructions
    async function testSupabase() {
      // Make sure you have a table named 'categories' in Supabase
      let { data, error } = await supabase.from('categories').select('*');
      
      if (error) {
        console.error("Error connecting to Supabase:", error);
      } else {
        console.log("Supabase connection successful! Data:", data);
      }
    }

    // Call the function
    testSupabase();
  }, []); // The empty array [] means this runs only once when the app loads

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

