import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() { }
  addToCart(product: Product) {
    this.items.push(product);
  }
  removeFromCart(product: Product) {
    const findFirstMatchingItem = this.items.findIndex(p=>p===product)
    this.items=this.items.filter((p,i)=>(i===findFirstMatchingItem ? false : true))
  }
  getItems() {
    return this.items;
  }
  get available() {
    return this.items.length ? true : false
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
