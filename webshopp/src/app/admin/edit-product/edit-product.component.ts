
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkWithHref } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { IdUniquenessService } from 'src/app/services/id-uniqueness.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  private products: Product[] = [];
  product!: any;
  categories: Category[] = [];
  idEntered!: number;
  buttonDisabled: boolean = true;
  changeProductForm!: FormGroup;
  private productOrderNumber!: any;

  constructor( 
    private _toastService: ToastService, 
    private route: ActivatedRoute,
    private idUniqueService: IdUniquenessService,
    private categoryService: CategoryService,
    private productService: ProductService) { }

  ngOnInit(): void {
    const productID = window.location.href.split("toode/")[1].split("-")[0];
    
    this.productService.getProducts()
      .subscribe(res => {
        this.products = res;
        const newArray = [];
        for (const key in res) {
          newArray.push(res[key]);
        }
        this.products = newArray

        this.product = this.products.find(element => 
          element.id.toString() === productID)

          this.productOrderNumber = this.products.indexOf(this.product);

          this.changeProductForm = new FormGroup({
            id: new FormControl(this.product.id),
            name: new FormControl(this.product.name),
            price: new FormControl(this.product.price),
            description: new FormControl(this.product.description),
            imgSrc: new FormControl(this.product.imgSrc),
            category: new FormControl(this.product.category),
            isActive: new FormControl(this.product.isActive),
          })

          this.idEntered = this.product.id
          this.onCheckUniqueness()
          
    });
    
    this.categoryService.getCategories().subscribe(res => {
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.categories = newArray 
    });
    
    // let idUrl = this.route.snapshot.paramMap.get("productID")
    // if (idUrl) {
    //   this.id = idUrl
    // }
    
  }

  onCheckUniqueness() {
    if (this.idEntered && this.idEntered.toString().length === 8) {
      this.buttonDisabled = this.idUniqueService.onCheckUniqueness(this.idEntered, this.products, this.product);
    }
  }

  onSubmit() {
    this.products[this.productOrderNumber] = this.changeProductForm.value
    this.productService.replaceProducts(this.products).subscribe( () =>
        {
          window.location.href="/admin/vaata-tooteid"
          this._toastService.success('Toode edukalt muudetud')
        }
      );
  }

  // private initForm() {
  //   this.changeProductForm = new FormGroup({
  //     id: new FormControl(this.product.id),
  //     name: new FormControl(this.product.name),
  //     price: new FormControl(this.product.price),
  //     description: new FormControl(this.product.description),
  //     imgSrc: new FormControl(this.product.imgSrc),
  //     category: new FormControl(this.product.category),
  //     isActive: new FormControl(this.product.isActive),
  //   })
  // }

}
