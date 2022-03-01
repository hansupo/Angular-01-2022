import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  idEntered!: number;
  buttonDisabled: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategoriesFromDatabase();
    this.getProductsFromDatabase();
  }

  private getCategoriesFromDatabase() {
    this.http.get<Category[]>("https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/categories.json").subscribe(res => {
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.categories = newArray 
    });
  }

  private getProductsFromDatabase() {
    this.http.get<Product[]>("https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(res => {
      this.products = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.products = newArray
    });
  }

  onCheckUniqueness() {
    if (this.idEntered && this.idEntered.toString().length === 8) {
      const index = this.products.findIndex(element => element.id === this.idEntered)
      if (index === -1) {
        // on unikaalne
        console.log("unikaalne");
        this.buttonDisabled = false;
      } else {
        // ei ole unikaalne
        console.log("ei ole unikaalne");
        this.buttonDisabled = true;
        
      }
    }
  }

  onSubmit(addProductForm: NgForm) {
    if (addProductForm.valid) {
      this.http.post(
        "https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        addProductForm.value).subscribe( () => {
        addProductForm.reset();
        this.http.get<Product[]>("https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(res => {
          this.products = res;
          const newArray = [];
          for (const key in res) {
            newArray.push(res[key]);
          }
          this.products = newArray
        });
          }
      );
    }

  }

}
