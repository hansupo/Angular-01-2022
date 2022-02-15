import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InimesedComponent } from './inimesed/inimesed.component';
import { ValitudComponent } from './valitud/valitud.component';
import { YksikComponent } from './yksik/yksik.component';

const routes: Routes = [
  {path: "valitud", component: ValitudComponent},
  {path: "inimesed", component: InimesedComponent},
  {path: "inimesed", redirectTo: "valitud"},
  {path: "inimene/:inimeseNimi", component: YksikComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
