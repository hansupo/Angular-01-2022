import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: Product[] = [];
  private originalProducts: Product[] = [];
  searchedProduct: string = "";
  descriptionWords = 15;

  constructor(private http: HttpClient, private _toastService: ToastService) { }

  ngOnInit(): void {
    this.http.get<Product[]>("https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(res => {
      this.products = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.products = newArray
      this.originalProducts = newArray
    });


  }

  onSearchProducts() {
    this.products = this.originalProducts.filter(element => 
        element.name.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) > -1 ||
        element.id.toString().indexOf(this.searchedProduct) > -1
      );
  }

  onDeleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index,1);

    this.http.put(
      "https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      this.products).subscribe( () => {
        this._toastService.success("Toode ID-ga " + product.id + " edukalt kustutatud!")
        }
    );

  }
}