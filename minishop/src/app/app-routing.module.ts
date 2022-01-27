import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeeskondComponent } from './meeskond/meeskond.component';
import { PoedComponent } from './poed/poed.component';
import { TootedComponent } from './tooted/tooted.component';

const routes: Routes = [
  { path: "", redirectTo: "tooted", pathMatch: 'full' },
  { path: "tooted", component: TootedComponent },
  { path: "poed", component: PoedComponent },
  { path: "meeskond", component: MeeskondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
