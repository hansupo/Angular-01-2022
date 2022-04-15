
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-products.model';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product!: any;
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const productID = window.location.href.split("toode/")[1].split("-")[0];
    
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.products = newArray

      this.product = this.products.find(element => 
        element.id.toString() === productID
        )
        console.log(this.product);
        
    });
    
    

  }

  onAddToCart(product: Product): void {
    console.log(product);

    const cartProductsLS = sessionStorage.getItem("cart");
    if (cartProductsLS) {
      const cartProducts: CartProduct[] = JSON.parse(cartProductsLS)
      const index = cartProducts.findIndex(element => element.cartProduct.id === product.id);
      if (index !== -1) {
        cartProducts[index].quantity++;
      } else {
        cartProducts.push({cartProduct: product, quantity: 1});
      }
      sessionStorage.setItem("cart", JSON.stringify(cartProducts));
      
    } else {
      const cartProducts = [{cartProduct: product, quantity: 1}];
      sessionStorage.setItem("cart", JSON.stringify(cartProducts));
    }

  }

}
