import { FilterState } from "../store/slices/filters.slice";
import { CartItem } from "./cart.types";

export interface BaseState {
  cart: CartItem[];
  filters: FilterState;
}