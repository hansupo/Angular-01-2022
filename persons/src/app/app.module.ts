import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValitudComponent } from './valitud/valitud.component';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from './shared/modules/material/material.module';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ValitudComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MaterialModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
