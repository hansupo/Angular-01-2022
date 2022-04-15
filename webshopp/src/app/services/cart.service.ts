import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartProduct } from '../models/cart-products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartChanged = new BehaviorSubject<CartProduct[]>(this.getCartProducts());

  constructor() { }

  getCartProducts(): CartProduct[] {
    const productsLS = sessionStorage.getItem("cart");
    if (productsLS) {
      const products: CartProduct[] = JSON.parse(productsLS);
      return products;
    }
    return [];
  }

  calculateCartSum(products: CartProduct[]): number {
    let sumOfCart = 0;
      products.forEach(element =>
        sumOfCart = sumOfCart + element.cartProduct.price * element.quantity)
    return sumOfCart;
  }

}


