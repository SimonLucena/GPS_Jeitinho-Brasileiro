import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';  // Importa o MatStepperModule
import { MatInputModule } from '@angular/material/input';      // Para inputs
import { MatButtonModule } from '@angular/material/button';    // Para botões
import { ReactiveFormsModule } from '@angular/forms';          // Para formulários reativos
import { CheckoutComponent } from './checkout.component';

@NgModule({
  declarations: [
    CheckoutComponent

  ],
  imports: [
    BrowserModule,
    MatStepperModule,   
    MatInputModule,   
    MatButtonModule,    
    ReactiveFormsModule 
  ],
  bootstrap: []
})
export class AppModule { }
