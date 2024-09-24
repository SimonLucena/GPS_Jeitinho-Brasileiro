import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { HeaderComponent } from './layouts/frame/header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    
  
  ],
  imports: [
    
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
