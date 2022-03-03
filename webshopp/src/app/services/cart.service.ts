import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartProduct } from '../models/cart-products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartChanged = new BehaviorSubject<CartProduct[]>(this.getCartProducts());

  constructor() { }

  getCartProducts() {
    const productsLS = sessionStorage.getItem("cart");
    if (productsLS) {
      const products: CartProduct[] = JSON.parse(productsLS);
      return products;
    }
    return [];
  }

}


