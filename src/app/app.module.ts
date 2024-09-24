import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
