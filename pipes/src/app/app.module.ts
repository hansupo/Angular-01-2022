import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersComponent } from './numbers/numbers.component';
import { MultiplyPipe } from './numbers/multiply.pipe';
import { PeopleComponent } from './people/people.component';
import { ShortenPipe } from './people/shorten.pipe';
import { CountrycodePipe } from './countrycode.pipe';
import { PeopleDetailsComponent } from './people/people-details/people-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    MultiplyPipe,
    PeopleComponent,
    ShortenPipe,
    CountrycodePipe,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
