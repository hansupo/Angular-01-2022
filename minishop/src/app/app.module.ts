import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeeskondComponent } from './meeskond/meeskond.component';
import { PoedComponent } from './poed/poed.component';
import { TootedComponent } from './tooted/tooted.component';

@NgModule({
  declarations: [
    AppComponent,
    MeeskondComponent,
    PoedComponent,
    TootedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
