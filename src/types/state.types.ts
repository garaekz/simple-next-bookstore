import { Book, CartItem } from "./cart.types";


export interface BaseState {
  cart: CartState;
  filters: FilterState;
}
export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  lastAddedItem: CartItem | null;
  newlyAdded: boolean;
};
export interface FilterState {
  genre: null,
  author: null,
  sort: string,
};