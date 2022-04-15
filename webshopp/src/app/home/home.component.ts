
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { UniquePipe } from '../pipes/unique.pipe';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  originalProducts: Product[] = [];

  categories: string[] = [];
  selectedCategory = "";
  page = 4;
  isLoggedIn = false;

  constructor(private productService: ProductService, 
    private cartService: CartService,
    private uniquePipe: UniquePipe,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(res => {
      this.products = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.originalProducts = newArray.reverse();
      this.products = this.originalProducts.slice();

      // this.categories = this.originalProducts.map(element => element.category)
      this.categories = this.uniquePipe.transform(this.originalProducts, "category")

      const paymentDone = false
      sessionStorage.setItem("pay-done", JSON.stringify(paymentDone));

      setTimeout(() => {
        if (sessionStorage['scrollPos']) {
          window.scrollTo(0, sessionStorage['scrollPos'])
          sessionStorage['scrollPos'] = 0;
          }
      },500
      ) 
      
    });


    // sisselogimine
    this.authService.loggedInChanged.subscribe(() => {
      this.isLoggedIn = sessionStorage.getItem("userData") !== null
      console.log(this.isLoggedIn);
    })


    
    
  }

  ngAfterViewInit() {

  }

  onSelectCategory(category: string) {
    this.selectedCategory = category;
    if (category == 'all') {
      this.products = this.originalProducts.slice();
    } else {
    this.products = this.originalProducts.filter(element => element.category == category)
    }
    console.log(category);
    
  }




  

}
