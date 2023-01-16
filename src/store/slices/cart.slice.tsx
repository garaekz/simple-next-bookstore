import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart.types";

const initialState = [] as CartItem[];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const book = action.payload;
      const bookExists = state.find((b) => b.book && b.book._id === book._id);
      if (bookExists) {
        bookExists.quantity++;
        bookExists.totalPrice = bookExists.quantity * bookExists.book.price;
        if (bookExists.book.discountedPrice) {
          bookExists.totalPrice =
            bookExists.book.discountedPrice * bookExists.quantity;
        }
      } else {
        let totalPrice = book.price;
        if (book.discountedPrice) {
          totalPrice = book.discountedPrice;
        }
        state.push({ book, quantity: 1, totalPrice });
      }
    },
    updateProduct: (state, action) => {
      const book = action.payload;
      const bookExists = state.find((b) => b.book && b.book._id === book._id);
      if (!bookExists) {
        return;
      }
      bookExists.quantity = book.quantity;
      bookExists.totalPrice = bookExists.quantity * bookExists.book.price;
      if (bookExists.book.discountedPrice) {
        bookExists.totalPrice =
          bookExists.book.discountedPrice * bookExists.quantity;
      }
    },
    removeProduct: (state, action) => {
      const index = state.findIndex((b) => b.book._id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, updateProduct } = cartSlice.actions;
