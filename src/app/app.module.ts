import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, // Importar apenas aqui
    RouterModule.forRoot([]),
    // outros módulos
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
