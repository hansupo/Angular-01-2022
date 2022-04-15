
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { IdUniquenessService } from 'src/app/services/id-uniqueness.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { ProductService } from 'src/app/services/product.service';

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

  selectedFile!: File;
  publicImageURL!: string;

  pic!: any;


  constructor( 
    private idUniqueService: IdUniquenessService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private imageUpload: ImageUploadService
    ) { }

  ngOnInit(): void {
    this.getCategoriesFromDatabase();
    this.getProductsFromDatabase();
  }

  private getCategoriesFromDatabase(): void  {
    this.categoryService.getCategories().subscribe(res => {
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.categories = newArray 
    });
  }

  private getProductsFromDatabase(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      const newArray = [];
      for (const key in res) {
        newArray.push(res[key]);
      }
      this.products = newArray
    });
  }

  onCheckUniqueness(): void {
    if (this.idEntered && this.idEntered.toString().length === 8) {
      const index = this.products.findIndex(element => element.id === this.idEntered)
      if (index === -1) {
        // on unikaalne
        this.buttonDisabled = false;
      } else {
        // ei ole unikaalne
        this.buttonDisabled = true;
        
      }
      this.idUniqueService.onCheckUniqueness(this.idEntered, this.products)
    }
  }

  handleFileInput(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.sendPictureToDb();
  }

  sendPictureToDb() {
    this.imageUpload.uploadPicture(this.selectedFile);
    this.imageUpload.uploadComplete2.subscribe(() => {
      this.showImage();
    })
  }

  showImage() {
    this.publicImageURL = this.imageUpload.uploadedPictureUrl
  }

  deletePic() {
    // this.imageUpload.deletePicture(true); 
    // comment out, sest kustutab kõik instansid ära antud pildist
    this.publicImageURL = "";
  }


  onSubmit(addProductForm: NgForm): void {
    const url = this.imageUpload.uploadedPictureUrl;

    if (url === "") {
      const isOk = confirm("Oled lisamas toodet ilma pildita, OK?");
      if (isOk) {
        console.log("lähen edasi");
      } else {
        console.log("katkestati");
        
      }
    }

    if (addProductForm.valid) {
      const val = addProductForm.value;
      const newProduct = new Product(
        val.id, val.name, val.price, url, val.description, val.category, val.isActive
        );
      console.log(addProductForm.value);
      this.productService.addProduct(newProduct).subscribe( () => {
        addProductForm.reset();
        this.publicImageURL = "";
        this.getProductsFromDatabase();
        
        
          }
      );
    
    }

  }

}
