import { Book, CartItem } from "./cart.types";

export interface FilterState {
  genre: null,
  author: null,
  sort: string,
};

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  lastAddedItem: Book | null;
};

export interface BaseState {
  cart: CartState;
  filters: FilterState;
}