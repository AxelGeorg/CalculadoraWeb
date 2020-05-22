import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule  
  ],
  providers: [],
  bootstrap: [AppComponent]  // usa-se o CalculadoraModule dentro do AppComponent
})
export class AppModule { }
