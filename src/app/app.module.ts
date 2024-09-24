import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideNgxMask, IConfig } from 'ngx-mask';  // Importar IConfig e provideNgxMask

// Definir o maskConfig
const maskConfig: Partial<IConfig> = {
  validation: false  // Configuração personalizada para ngx-mask
};

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    provideNgxMask(maskConfig)  // Fornecer ngx-mask com a configuração correta
  ],
  bootstrap: []
})
export class AppModule {}
