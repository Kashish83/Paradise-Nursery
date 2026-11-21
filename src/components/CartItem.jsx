import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  selectTotalQuantity,
  selectTotalPrice,
} from '../redux/CartSlice';
import Navbar from './Navbar';

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  // State for checkout message popup / banner
  const [checkoutMessage, setCheckoutMessage] = useState('');

  // Handle increase
  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item.id));
  };

  // Handle decrease (Slice prevents going below 1)
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id));
    }
  };

  // Handle delete
  const handleDelete = (item) => {
    dispatch(removeFromCart(item.id));
  };

  // Handle checkout button click
  const handleCheckout = () => {
    const msg = 'Coming Soon! Checkout functionality will be available soon.';
    setCheckoutMessage(msg);
    alert(msg);
  };

  // Handle continue shopping
  const handleContinueShopping = () => {
    navigate('/plants');
  };

  return (
    <div className="cart-page">
      {/* Navbar on Cart page */}
      <Navbar />

      <main className="cart-container">
        {/* Page Header */}
        <div className="cart-header-section">
          <div className="cart-title-row">
            <div>
              <h1 className="cart-title">Shopping Cart</h1>
              <p className="cart-subtitle">Review your selected houseplants before checkout</p>
            </div>
            {cartItems.length > 0 && (
              <div className="cart-summary-badge">
                <span>Total Items: <strong>{totalQuantity}</strong></span>
                <span className="summary-separator">•</span>
                <span>Cart Total: <strong>${totalPrice.toFixed(2)}</strong></span>
              </div>
            )}
          </div>
        </div>

        {/* Checkout Notification Message */}
        {checkoutMessage && (
          <div className="checkout-alert" role="alert">
            <span className="alert-icon">ℹ️</span>
            <span>{checkoutMessage}</span>
            <button
              className="alert-close-btn"
              onClick={() => setCheckoutMessage('')}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        )}

        {/* Empty Cart View */}
        {cartItems.length === 0 ? (
          <div className="empty-cart-card">
            <div className="empty-cart-icon">🪴</div>
            <h2 className="empty-cart-title">Your Cart is Currently Empty</h2>
            <p className="empty-cart-text">
              Looks like you haven't added any green companions to your cart yet! Explore our
              collection of air-purifying, aromatic, and low-maintenance plants.
            </p>
            <button
              type="button"
              className="continue-shopping-btn primary"
              onClick={handleContinueShopping}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Cart Items List */}
            <div className="cart-items-list">
              {cartItems.map((item) => {
                const itemSubtotal = item.price * item.quantity;

                return (
                  <article key={item.id} className="cart-item-card">
                    {/* Thumbnail */}
                    <div className="cart-item-thumbnail-wrapper">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-thumbnail"
                      />
                    </div>

                    {/* Plant Information */}
                    <div className="cart-item-info">
                      <div className="cart-item-header">
                        <div>
                          <h3 className="cart-item-name">{item.name}</h3>
                          <span className="cart-item-category">{item.category}</span>
                        </div>
                        <div className="cart-item-subtotal-block">
                          <span className="subtotal-label">Subtotal</span>
                          <span className="cart-item-subtotal">
                            ${itemSubtotal.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="cart-item-unit-price">
                        Unit Price: <strong>${item.price.toFixed(2)}</strong>
                      </div>

                      {/* Quantity Controls and Delete */}
                      <div className="cart-item-actions">
                        <div className="quantity-controller">
                          <button
                            type="button"
                            className="quantity-btn decrease-btn"
                            onClick={() => handleDecrease(item)}
                            disabled={item.quantity <= 1}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            −
                          </button>
                          <span className="quantity-display" aria-label={`Quantity: ${item.quantity}`}>
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="quantity-btn increase-btn"
                            onClick={() => handleIncrease(item)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="delete-item-btn"
                          onClick={() => handleDelete(item)}
                          aria-label={`Remove ${item.name} from cart`}
                        >
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
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Cart Order Summary Sidebar */}
            <aside className="cart-summary-sidebar">
              <div className="summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                  <span>Total Items</span>
                  <span>{totalQuantity}</span>
                </div>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                  <span>Standard Shipping</span>
                  <span className="free-shipping-tag">FREE</span>
                </div>

                <hr className="summary-divider" />

                <div className="summary-row summary-total">
                  <span>Total Amount</span>
                  <span className="total-amount-highlight">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Primary Action Buttons */}
                <div className="cart-cta-buttons">
                  <button
                    type="button"
                    className="checkout-btn"
                    onClick={handleCheckout}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    Checkout
                  </button>

                  <button
                    type="button"
                    className="continue-shopping-btn"
                    onClick={handleContinueShopping}
                  >
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
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Continue Shopping
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartItem;
