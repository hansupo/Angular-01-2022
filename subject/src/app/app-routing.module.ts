import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JagamineComponent } from './jagamine/jagamine.component';
import { KorrutamineComponent } from './korrutamine/korrutamine.component';
import { LahutamineComponent } from './lahutamine/lahutamine.component';
import { LiitmineComponent } from './liitmine/liitmine.component';

const routes: Routes = [
  { path: "", redirectTo: "add", pathMatch: 'full' },
  { path: "add", component: LiitmineComponent },
  { path: "divide", component: JagamineComponent },
  { path: "multiply", component: KorrutamineComponent },
  { path: "subtract", component: LahutamineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
