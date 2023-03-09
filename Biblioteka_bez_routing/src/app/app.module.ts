import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BiblioComponent } from './biblio/biblio.component';

import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BiblioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
