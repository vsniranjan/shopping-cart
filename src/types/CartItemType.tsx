import type { Product } from "./ProductType";

export interface CartItem extends Product {
  qty: number;
}
