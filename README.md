# Paradise Nursery Shopping Application

An elegant, fully responsive e-commerce web application for **Paradise Nursery**, an online plant store dedicated to bringing greenery, tranquility, and air-purifying houseplants into modern homes and workspaces.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Folder Structure](#project-folder-structure)
- [Installation Instructions](#installation-instructions)
- [How to Run the Application](#how-to-run-the-application)
- [Grading Tasks Reference](#grading-tasks-reference)

---

## Project Overview

Paradise Nursery is an online shopping platform designed to showcase healthy, vibrant houseplants categorized into Air Purifying Plants, Aromatic Fragrant Plants, and Low Maintenance Plants. Users can browse detailed plant cards, add them to their shopping cart, manage item quantities, see real-time price calculations, and navigate seamlessly between the landing page, plant catalog, and shopping cart.

---

## Key Features

1. **Interactive Landing Page (`App.jsx`, `App.css`)**:
   - Distinctive company branding featuring the name **Paradise Nursery**.
   - High-resolution CSS background image of a lush indoor greenhouse nursery with an elegant dark green overlay for high readability.
   - Welcoming header with mission tagline.
   - **Get Started** button providing immediate navigation to the plant catalog.
   - Comprehensive **About Us** component detailing the company's background, mission & vision, commitment to healthy plants, and sustainable gardening practices.

2. **Houseplant Catalog (`ProductList.jsx`, `plants.js`)**:
   - 18 unique houseplants categorized across three distinct groups:
     - **Air Purifying Plants** (6 unique plants)
     - **Aromatic Fragrant Plants** (6 unique plants)
     - **Low Maintenance Plants** (6 unique plants)
   - Each plant card presents:
     - Clear plant thumbnail image
     - Botanical name
     - Unit price
     - Informative plant description
     - Dynamic **Add to Cart** button
   - Clicking **Add to Cart**:
     - Adds the item to the Redux shopping cart.
     - Disables the button to prevent duplicate accidental additions.
     - Updates button text to **Added to Cart**.
     - Automatically updates the cart item count in the navigation bar.

3. **Global Navigation Bar (`Navbar.jsx`)**:
   - Displayed consistently across both the Product Listing and Shopping Cart pages.
   - Includes Paradise Nursery branding and logo.
   - Navigation links to **Home**, **Plants**, and **Cart**.
   - Shopping cart icon featuring a dynamic badge showing the real-time total count of all cart items.

4. **Dynamic Redux Shopping Cart (`CartItem.jsx`, `CartSlice.jsx`)**:
   - Displays all selected plants with thumbnail, name, unit price, quantity, and individual subtotal.
   - **Increase Quantity (`+`)**: Increments the item quantity and dynamically updates individual subtotal and overall cart total.
   - **Decrease Quantity (`−`)**: Decrements item quantity while preventing it from dropping below 1.
   - **Delete Button**: Removes an item completely from the shopping cart.
   - **Order Summary Sidebar**: Shows total item count, order subtotal, free shipping tag, and calculated grand total.
   - **Checkout Button**: Displays a friendly notification stating `"Coming Soon! Checkout functionality will be available soon."`
   - **Continue Shopping Button**: Seamlessly navigates back to the plant catalog.
   - **Empty Cart State**: Displays a friendly placeholder message and a quick link to start shopping when no items are in the cart.

5. **State Management (`store.js`, `CartSlice.jsx`)**:
   - Centralized state management powered by **Redux Toolkit** and **React Redux**.
   - Clean slice actions: `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `updateQuantity`, and `clearCart`.
   - Selector utilities for computing total quantity and total price.

---

## Technologies Used

- **React.js 18**: Component-based UI library with functional components and hooks (`useState`, `useDispatch`, `useSelector`, `useNavigate`).
- **Vite**: Ultra-fast next-generation frontend development tooling and bundler.
- **Redux Toolkit (@reduxjs/toolkit)**: Standard, efficient Redux logic for shopping cart state.
- **React Redux**: Official React bindings for Redux.
- **React Router DOM (v6)**: Declarative client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useNavigate`).
- **CSS3**: Custom modern styling featuring CSS variables, flexbox, CSS grid, and responsive media queries.

---

## Project Folder Structure

```text
paradise-nursery/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar with dynamic cart count badge
│   │   ├── AboutUs.jsx       # Company background, mission, vision & values
│   │   ├── ProductList.jsx   # 18 plants grouped into 3 categories with Add to Cart
│   │   └── CartItem.jsx      # Shopping cart page with quantity controls & totals
│   │
│   ├── data/
│   │   └── plants.js         # 18 unique plant records with images, prices & descriptions
│   │
│   ├── redux/
│   │   ├── store.js          # Configured Redux Toolkit store
│   │   └── CartSlice.jsx     # Cart slice reducers (addToCart, remove, inc, dec)
│   │
│   ├── App.jsx               # Landing page with hero, AboutUs & route definitions
│   ├── App.css               # Full stylesheet including landing background image
│   └── main.jsx              # React DOM root with Provider and BrowserRouter
│
├── README.md                 # Project documentation and setup guide
└── package.json              # Project dependencies and npm scripts
```

---

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd paradise-nursery
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

---

## How to Run the Application

### Start Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL displayed in the terminal (typically `http://localhost:5173`).

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Grading Tasks Reference

| Task | File Path | Description |
|---|---|---|
| **Task 1** | `README.md` | Contains project name, description, features, setup, and structure. |
| **Task 2** | `src/components/AboutUs.jsx` | Details company mission, vision, healthy plants commitment, and sustainability. |
| **Task 3** | `src/App.css` | Implements the landing page background image (`background-size: cover; background-position: center;`). |
| **Task 4** | `src/App.jsx` | Displays Paradise Nursery landing page with company name and Get Started button. |
| **Task 5** | `src/redux/CartSlice.jsx` | Redux slice managing items, `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`. |
| **Task 6** | `src/components/ProductList.jsx` | Displays 18+ plants in 3 categories with Add to Cart, disabled state, and Navbar. |
| **Task 7** | `src/components/CartItem.jsx` | Shopping cart with total amounts, item subtotals, quantity adjustments, delete, checkout, and continue shopping. |
