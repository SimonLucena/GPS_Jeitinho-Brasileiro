import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProdDetailsComponent } from './prod-details/prod-details.component';


@NgModule({
  declarations: [ 
  ],
  imports: [
    RouterModule.forRoot([]),
    // outros módulos
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
