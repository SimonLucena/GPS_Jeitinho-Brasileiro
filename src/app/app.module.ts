import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from './componentes-angular/api-url';

@NgModule({
  declarations: [ 
  ],
  imports: [
    BrowserModule, // Importar apenas aqui
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
