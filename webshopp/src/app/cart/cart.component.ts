import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-products.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: CartProduct[] = [];
  totalPrice = 0
  paymentDone :boolean = false

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const productsLS = sessionStorage.getItem("cart");
    if (productsLS) {
      this.products = JSON.parse(productsLS);
    }

    const paymentDone = sessionStorage.getItem("pay-done");
    if (paymentDone) {
      this.paymentDone = JSON.parse(paymentDone) 
    }
    if (paymentDone && this.products.length !== 0) {this.paymentDone = false}

    this.onCalculateTotal()
  }

  onDecreaseQuantity(product: CartProduct) {
    product.quantity--;
    if (product.quantity === 0) {
      this.onRemoveFromCart(product)
    }
    sessionStorage.setItem("cart", JSON.stringify(this.products))

    this.onCalculateTotal()
  }

  onIncreaseQuantity(product: CartProduct) {
    product.quantity++;
    sessionStorage.setItem("cart", JSON.stringify(this.products))

    this.onCalculateTotal()
  }

  onRemoveFromCart(product: CartProduct) {
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
    sessionStorage.setItem("cart", JSON.stringify(this.products))

    this.onCalculateTotal()
  }

  private onCalculateTotal() {
    this.totalPrice = 0
    this.products.forEach(element => this.totalPrice = this.totalPrice + element.cartProduct.price * element.quantity )
  }

  onEmptyCart() {
    this.products = [];
    sessionStorage.setItem("cart", JSON.stringify(this.products));
    this.onCalculateTotal();
  }

  private onPaymentDone() {
    const paymentDone = true
    sessionStorage.setItem("pay-done", JSON.stringify(paymentDone));
    this.onEmptyCart();
  }

  onPay() {
    const payDetails = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.totalPrice,
      "order_reference": Math.floor(Math.random() * 8999999 + 100000),
      "nonce": "92ddcfab96e34a5f" + Math.floor(Math.random() * 8999999 + 100000) + new Date() ,
      "timestamp": new Date(),
      "customer_url": 'https://www.delfi.ee/'
    }

    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    this.http.post<any>(
      url,
      payDetails,
      {headers:
        new HttpHeaders(
          {
            'Authorization': 
            'Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=='
          }
        )
      }
    ).subscribe(res => {
      window.location.href = res.payment_link;
      this.onPaymentDone();
    
    });
  }

}
