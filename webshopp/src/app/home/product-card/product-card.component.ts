import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/models/cart-products.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() loggedIn = false;
  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
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

  onViewProduct(productID: number, productName: string) {
    sessionStorage['scrollPos'] = window.scrollY;
    this.router.navigateByUrl("/toode/" + productID + "-" + productName.toLowerCase().replace(' ', '-').replace(' ', '-'))
    // sessionStorage.setItem("scrollPos", )
  }

}
