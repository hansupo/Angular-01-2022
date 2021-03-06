import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './admin/category/category.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { ProductPricePipe } from './pipes/product-price.pipe';
import { WordCountPipe } from './pipes/word-count.pipe';
import { UniquePipe } from './pipes/unique.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ParcelMachineComponent } from './cart/parcel-machine/parcel-machine.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { SortButtonsComponent } from './home/sort-buttons/sort-buttons.component';
import { ModalGlobalComponent } from './modal-global/modal-global.component';
import { ShopsComponent } from './shops/shops.component';
import { AutosizeDirective } from './directives/autosize.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    AddProductComponent,
    EditProductComponent,
    AdminHomeComponent,
    ViewProductsComponent,
    CategoryComponent,
    SingleProductComponent,
    ProductPricePipe,
    WordCountPipe,
    UniquePipe,
    LoginComponent,
    SignupComponent,
    ParcelMachineComponent,
    CarouselComponent,
    ProductCardComponent,
    SortButtonsComponent,
    ModalGlobalComponent,
    ShopsComponent,
    AutosizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    AngularToastifyModule, // <lib-toastify-toast-container>
    ReactiveFormsModule, NgbModule
  ],
  providers: [ToastService, UniquePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}