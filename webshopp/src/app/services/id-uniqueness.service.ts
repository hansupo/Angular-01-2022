import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class IdUniquenessService {

  constructor() { }

  onCheckUniqueness(idEntered: number, products: Product[], product?: Product): boolean {

      const index = products.findIndex(element => element.id === idEntered)
      let productId = null;
      if (product) {
        productId = product.id
      }
      if (index === -1 || productId === idEntered) {
        // on unikaalne
        return false;
      } else {
        // ei ole unikaalne
        return true;
      }
    
  }
}
