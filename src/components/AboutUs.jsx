import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-card">
        <div className="about-us-badge">Welcome to Paradise Nursery</div>
        <h2 className="about-us-title">Cultivating Green Sanctuaries Since 2020</h2>

        <p className="about-us-intro">
          At <strong>Paradise Nursery</strong>, we believe that bringing nature indoors has the power
          to transform everyday living spaces into serene, vibrant sanctuaries. What began as a modest
          family passion project has blossomed into an all-inclusive online plant nursery, connecting
          urban homes and busy workplaces with the restorative beauty of thriving houseplants.
        </p>

        <div className="about-us-grid">
          <div className="about-feature-box">
            <div className="feature-icon">🌿</div>
            <h3>Our Mission & Vision</h3>
            <p>
              Our mission is to make indoor gardening accessible, rewarding, and joyful for everyone.
              We envision greener, healthier communities where fresh greenery purifies the air and
              enhances daily well-being.
            </p>
          </div>

          <div className="about-feature-box">
            <div className="feature-icon">✨</div>
            <h3>Premium Healthy Plants</h3>
            <p>
              Every plant is hand-selected and carefully inspected by horticulturists. We nurture each
              specimen in nutrient-rich soil to ensure it arrives at your doorstep healthy, lush, and
              ready to flourish.
            </p>
          </div>

          <div className="about-feature-box">
            <div className="feature-icon">🌱</div>
            <h3>Sustainable Gardening</h3>
            <p>
              We are dedicated to sustainable horticulture—using organic fertilizers, eco-conscious
              packaging, and recycled materials to preserve the environment for future generations.
            </p>
          </div>

          <div className="about-feature-box">
            <div className="feature-icon">💚</div>
            <h3>Customer Dedication</h3>
            <p>
              Your plant parenting success is our priority. From beginner-friendly plant selections to
              expert ongoing care guides, we are with you every step of your green journey.
            </p>
          </div>
        </div>

        <p className="about-us-conclusion">
          Whether you are looking to purify your indoor air, infuse aromatic botanical aromas into your
          living room, or find low-maintenance leafy companions, Paradise Nursery is here to guide and
          inspire you. Join us in cultivating a greener, healthier world today!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
