import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* block 1 */}
            <div className="hero-section">
                {/* <div className="video-container"><video src="https://aultuptfqvxnjvghqztc.supabase.co/storage/v1/object/sign/videos/Generating_Video_of_Moving_Water.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNWEzMjExOS1lZWZhLTRmNTktOWQzZi1hZmE2Y2EwZDRkZDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvR2VuZXJhdGluZ19WaWRlb19vZl9Nb3ZpbmdfV2F0ZXIubXA0IiwiaWF0IjoxNzU2MDIzMTI3LCJleHAiOjE3ODc1NTkxMjd9.S78pRrXQFpfd1DU-yyYwKFWT3bn0LtT2CoLp-ITOND8" autoPlay loop muted></video> */}
                <div className="video-container"><video src="https://aultuptfqvxnjvghqztc.supabase.co/storage/v1/object/sign/videos/WhatsApp%20Video%202025-08-20%20at%2015.57.02.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNWEzMjExOS1lZWZhLTRmNTktOWQzZi1hZmE2Y2EwZDRkZDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvV2hhdHNBcHAgVmlkZW8gMjAyNS0wOC0yMCBhdCAxNS41Ny4wMi5tcDQiLCJpYXQiOjE3NTYwMjE0NzgsImV4cCI6MTc4NzU1NzQ3OH0.0VDEruXn7thdbR1HHLnGT6FnVTG-9TwCkisFWCHULJg" autoPlay loop muted></video>
                </div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    {/* <h1>Sanshi H2O</h1> */}
                    <img src="../../public/h2o_logo.svg" alt="logo" />
                    <Link to="/about"><button className="hero-button">Learn More</button></Link>
                </div>
            </div>

            {/* block 2 */}
            <div className="products-section">
                <h2>Our Products</h2>
                <p>Discover our range of premium beverages</p>
                <div className="product-grid">
      // Product cards will be mapped here
                </div>
                <button className="view-all-button">View All Products</button>
            </div>

            {/* block 3 */}
            <div className="features-section">
                <h2>Why Choose Sanshi H2O?</h2>
                <p>Quality, purity, and freshness in every drop</p>
                <div className="features-grid">
      // Feature items will be mapped here
                </div>
            </div>
        </div>
    );
}

export default Home
