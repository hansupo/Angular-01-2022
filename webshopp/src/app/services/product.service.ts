import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "https://webshop-hansu-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  addProduct(products: Product) {
    return this.http.post(this.url, products);
  }

  replaceProducts(products: Product[]) {
    return this.http.put(this.url, products);
  }
}
