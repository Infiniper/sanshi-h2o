import { Link } from 'react-router-dom';
import './navbar.css'

// A function to handle the cart button click
const handleCartClick = () => {
    console.log("Cart button was clicked!");
    // You can add logic here to open a cart modal or sidebar
};

function Navbar(){
    return (
    <div className='nav-elements'>
        {/* <button className='logo'><img src="../../public/logo.svg" alt="Logo" /></button> */}
      <Link to="/"><button className='logo'><img src="../../public/logo.svg" alt="Logo" /></button></Link>
      <div className='nav-links'>
            <Link to="/"><button><p>Home</p></button></Link>
            <Link to="/products"><button><p>Products</p></button></Link>
            <Link to="/about"><button><p>About Us</p></button></Link>
            <Link to="/contact"><button><p>Contact</p></button></Link>
      </div>
            <button className='cart-button' onClick={handleCartClick}>
                <img className='cart' src="/cart.svg" alt="Cart" />
            </button>        
    </div>
    )
}

export default Navbar