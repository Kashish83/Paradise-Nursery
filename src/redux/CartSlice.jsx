import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add product to cart; if it already exists, increment quantity
    addToCart: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === plant.id || item.name === plant.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: plant.id,
          name: plant.name,
          price: Number(plant.price),
          image: plant.image,
          description: plant.description,
          category: plant.category,
          quantity: 1,
        });
      }
    },

    // Remove product completely from cart by id or name
    removeFromCart: (state, action) => {
      const payload = action.payload;
      const id = typeof payload === 'object' && payload !== null ? payload.id : payload;
      const name = typeof payload === 'object' && payload !== null ? payload.name : payload;

      state.items = state.items.filter(
        (item) => item.id !== id && item.name !== name
      );
    },

    // Increase product quantity by 1
    increaseQuantity: (state, action) => {
      const payload = action.payload;
      const id = typeof payload === 'object' && payload !== null ? payload.id : payload;
      const name = typeof payload === 'object' && payload !== null ? payload.name : payload;

      const item = state.items.find(
        (item) => item.id === id || item.name === name
      );
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease product quantity by 1 (prevent going below 1)
    decreaseQuantity: (state, action) => {
      const payload = action.payload;
      const id = typeof payload === 'object' && payload !== null ? payload.id : payload;
      const name = typeof payload === 'object' && payload !== null ? payload.name : payload;

      const item = state.items.find(
        (item) => item.id === id || item.name === name
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Optional utility action for direct quantity update
    updateQuantity: (state, action) => {
      const { id, name, quantity } = action.payload;
      const item = state.items.find(
        (item) => (id && item.id === id) || (name && item.name === name)
      );
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },

    // Clear cart completely
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Selectors for total quantity and total price
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
