import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>("https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(res => {
      this.products = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);

      }

      this.products = newArray
      
    });
  }

  onDeleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index,1);

    this.http.put(
      "https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      this.products).subscribe( () => {
        alert("Toode ID-ga " + product.id + " edukalt kustutatud!")
        }
    );

  }
}
