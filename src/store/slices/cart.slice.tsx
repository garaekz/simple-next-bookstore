import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, CartItem } from "../../types/cart.types";
import { CartState } from "../../types/state.types";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  lastAddedItem: null,
  newlyAdded: false,
} as CartState;
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Book>) => {
      const book = action.payload;
      const itemExists = state.items.find((b) => b && b.book._id === book._id);
      if (itemExists) {
        itemExists.quantity++;
        itemExists.totalPrice = itemExists.book.price * itemExists.quantity;
        if (itemExists.book.discountedPrice) {
          itemExists.totalPrice = itemExists.book.discountedPrice * itemExists.quantity;
        }
        state.lastAddedItem = itemExists;
      } else {
        let totalPrice = book.price;
        if (book.discountedPrice) {
          totalPrice = book.discountedPrice;
        }
        const newItem = { book, quantity: 1, totalPrice }
        state.items.push(newItem);
        state.lastAddedItem = newItem;
      }
      updateTotals(state);
      state.newlyAdded = true;
    },
    updateProduct: (state, action: PayloadAction<{id: string, quantity: number}>) => {
      const { id, quantity } = action.payload;
      const itemExists = state.items.find((b) => b.book._id === id);
      if (!itemExists) {
        return;
      }
      itemExists.quantity = quantity;
      itemExists.totalPrice = itemExists.book.price * itemExists.quantity;
      if (itemExists.book.discountedPrice) {
        itemExists.totalPrice = itemExists.book.discountedPrice * itemExists.quantity;
      }
      updateTotals(state);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((b) => b.book._id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
        updateTotals(state);
      }
    },
    setNewlyAdded(state, action: PayloadAction<boolean>) {
      state.newlyAdded = action.payload;
    },
  },
});

const updateTotals = (state: CartState) => {
  state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
  state.totalPrice = state.items.reduce((acc, item) => acc + item.totalPrice, 0);
}

export default cartSlice.reducer;
export const { addProduct, removeProduct, updateProduct, setNewlyAdded } = cartSlice.actions;
