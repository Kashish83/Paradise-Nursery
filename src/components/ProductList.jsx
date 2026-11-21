import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import plants from '../data/plants';
import Navbar from './Navbar';

const ProductList = () => {
  const dispatch = useDispatch();
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Helper function to check if an item is already in the cart
  const isItemInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  // Dispatch action to add plant to Redux cart
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  // Group plants by category
  const categories = [
    {
      name: 'Air Purifying Plants',
      description: 'Natural detoxifiers that cleanse airborne toxins, release oxygen, and purify indoor living spaces.',
      icon: '🍃',
    },
    {
      name: 'Aromatic Fragrant Plants',
      description: 'Botanicals offering soothing fragrances, refreshing scents, and culinary herbs to delight your senses.',
      icon: '🌸',
    },
    {
      name: 'Low Maintenance Plants',
      description: 'Hardy, forgiving greenery that thrives in lower light and requires minimal watering. Perfect for beginners.',
      icon: '🪴',
    },
  ];

  return (
    <div className="product-page">
      {/* Navbar on Product Listing page */}
      <Navbar />

      {/* Hero Banner for Products */}
      <section className="product-hero">
        <div className="hero-content">
          <span className="hero-pill">🌿 Plant Collection</span>
          <h1 className="hero-heading">Explore Our Houseplants</h1>
          <p className="hero-subtext">
            Discover our hand-picked selection of indoor plants. Bring freshness, tranquility,
            and natural beauty into your living space today.
          </p>
        </div>
      </section>

      {/* Main Product Container */}
      <main className="product-list-container">
        {categories.map((cat) => {
          const categoryPlants = plants.filter((plant) => plant.category === cat.name);

          return (
            <section key={cat.name} className="category-section" id={cat.name.replace(/\s+/g, '-').toLowerCase()}>
              <div className="category-header">
                <div className="category-title-wrap">
                  <span className="category-icon">{cat.icon}</span>
                  <div>
                    <h2 className="category-name">{cat.name}</h2>
                    <p className="category-desc">{cat.description}</p>
                  </div>
                </div>
                <span className="category-count">{categoryPlants.length} Plants</span>
              </div>

              {/* Plant Cards Grid */}
              <div className="plants-grid">
                {categoryPlants.map((plant) => {
                  const alreadyAdded = isItemInCart(plant.id);

                  return (
                    <article key={plant.id} className="plant-card">
                      <div className="plant-image-wrapper">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="plant-image"
                          loading="lazy"
                        />
                        <span className="plant-category-badge">{plant.category}</span>
                      </div>

                      <div className="plant-details">
                        <div className="plant-title-row">
                          <h3 className="plant-name">{plant.name}</h3>
                          <span className="plant-price">${plant.price}</span>
                        </div>

                        <p className="plant-description">{plant.description}</p>

                        <div className="plant-action-row">
                          <button
                            type="button"
                            className={`add-to-cart-btn ${alreadyAdded ? 'added' : ''}`}
                            onClick={() => handleAddToCart(plant)}
                            disabled={alreadyAdded}
                            aria-label={alreadyAdded ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}
                          >
                            {alreadyAdded ? (
                              <>
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Added to Cart
                              </>
                            ) : (
                              <>
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="9" cy="21" r="1" />
                                  <circle cx="20" cy="21" r="1" />
                                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                                Add to Cart
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default ProductList;
