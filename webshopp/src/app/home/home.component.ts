import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-products.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  products: Product[] = [];

  constructor(private http: HttpClient, 
    private cartService: CartService) { }

  ngOnInit(): void {
    this.http.get<Product[]>("https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(res => {
      this.products = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }

      this.products = newArray

      // const paymentDone = false
      // sessionStorage.setItem("pay-done", JSON.stringify(paymentDone));
      
    });
  }

  onSortNameAsc() {
    this.products.sort((a,b) => a.name.localeCompare(b.name));
  }

  onSortNameDesc() {
    this.products.sort((a,b) => b.name.localeCompare(a.name));
  }

  onSortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  onSortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
  }


  onAddToCart(product: Product): void {


    const cartProductsLS = sessionStorage.getItem("cart");
    let cartProducts: CartProduct[] = [];
    if (cartProductsLS) {
      cartProducts = JSON.parse(cartProductsLS)
      const index = cartProducts.findIndex(element => element.cartProduct.id === product.id);
      if (index !== -1) {
        cartProducts[index].quantity++;
      } else {
        cartProducts.push({cartProduct: product, quantity: 1});
      }
      // sessionStorage.setItem("cart", JSON.stringify(cartProducts));
      
    } else {
      cartProducts = [{cartProduct: product, quantity: 1}];
      
    }
    sessionStorage.setItem("cart", JSON.stringify(cartProducts));
    this.cartService.cartChanged.next(cartProducts);


  }

}
