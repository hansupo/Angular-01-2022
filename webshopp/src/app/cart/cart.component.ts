import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-products.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: CartProduct[] = [];
  totalPrice = 0;
  paymentDone :boolean = false;
 

  constructor(private http: HttpClient,
    private cartService: CartService,
    private paymentService: PaymentService) { }

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

    this.onCalculateTotal();

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
    // this.totalPrice = 0
    // this.products.forEach(element => this.totalPrice = this.totalPrice + element.cartProduct.price * element.quantity )
    // this.cartService.cartChanged.next(this.products);

    // 

    this.totalPrice =  this.cartService.calculateCartSum(this.products);
    this.cartService.cartChanged.next(this.products);
  }

  onEmptyCart() {
    this.products = [];
    sessionStorage.setItem("cart", JSON.stringify(this.products));
    this.onCalculateTotal();
  }

  // private onPaymentDone() {
  //   const paymentDone = true
  //   sessionStorage.setItem("pay-done", JSON.stringify(paymentDone));
  //   this.onEmptyCart();
  // }

  onPay() { 

    this.paymentService.makePayment(this.totalPrice).subscribe(res => {
      window.location.href = res.payment_link;
    
    })
  }

}
