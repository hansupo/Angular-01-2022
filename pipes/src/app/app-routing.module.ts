import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersComponent } from './numbers/numbers.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path: "", redirectTo: "numbers", pathMatch: "full"},
  {path: "numbers", component: NumbersComponent},
  {path: "people", component: PeopleComponent},
  {path: "**", redirectTo: "people"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
