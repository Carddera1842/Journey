import React, { useState } from 'react';


function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="homepage-container">

      <header className="home-hero-section">
        <nav className="nav">
          <h1 className="logo">OutdoorFinder</h1>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#locations">Locations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h2>Discover Beautiful State Parks & Gardens</h2>
          <p>Plan your perfect day outdoors in just a few clicks.</p>

          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter city, park name, or zip code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </header>


      <main>
        <section id="features" className="features">
          <h3>Why Explore Outdoors?</h3>
          <ul>
            <li>Fresh air and scenic views</li>
            <li>Relax and recharge in nature</li>
            <li>Fun activities for friends and family</li>
          </ul>
        </section>

        <section id="locations" className="locations">
          <h3>Popular Locations</h3>
          <div className="location-grid">
            <div className="location-card">
              <img
                src="https://via.placeholder.com/300x200?text=State+Park+1"
                alt="State Park 1"
              />
              <h4>Green Valley Park</h4>
              <p>Experience lush hiking trails and wildlife.</p>
            </div>

            <div className="location-card">
              <img
                src="https://via.placeholder.com/300x200?text=Garden+1"
                alt="Garden 1"
              />
              <h4>Rosewood Botanical Garden</h4>
              <p>Explore exotic plant species and colorful flower beds.</p>
            </div>
            

          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>&copy; 2025 OutdoorFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
