import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart.types";

const initialState = [] as CartItem[];
const calculateDiscount = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const book = action.payload;
      const bookExists = state.find((b) => b.book && b.book._id === book._id);
      if (bookExists) {
        bookExists.quantity++;
        const tmpPrice = bookExists.quantity * bookExists.book.price;
        if (bookExists.book.discount) {
          bookExists.totalPrice = tmpPrice - (tmpPrice * bookExists.book.discount) / 100;
        }
      } else {
        let totalPrice = book.price;
        if (book.discount) {
          totalPrice = book.price - (book.price * book.discount) / 100;
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
      let tmpPrice = bookExists.quantity * bookExists.book.price;
      if (bookExists.book.discount) {
        tmpPrice = tmpPrice - (tmpPrice * bookExists.book.discount) / 100;
      }
      bookExists.totalPrice = tmpPrice;
    },
    removeProduct: (state, action) => {
      const index = state.findIndex((b) => b.book._id === action.payload)
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, updateProduct} = cartSlice.actions;