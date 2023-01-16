import cartReducer from "./slices/cart.slice";
import filtersReducer, { FilterState } from "./slices/filters.slice";
import { api } from "./api";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { CartItem } from "../types/cart.types";

export const store = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
      filters: filtersReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export const wrapper = createWrapper(store);
