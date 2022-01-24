import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HarjutusComponent } from './harjutus/harjutus.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{ path: "", component: HomeComponent},
{ path: "news", component: NewsComponent },
{ path: "contact", component: ContactComponent },
{ path: "about", component: AboutComponent },
{ path: "test", component: HarjutusComponent },
{ path: "cart", component: CartComponent },
{ path: "products", component: ProductsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
