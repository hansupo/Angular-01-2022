import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValitudComponent } from './valitud/valitud.component';

const routes: Routes = [
  {path: "valitud", component: ValitudComponent},
  {path: "**", redirectTo: "valitud"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
