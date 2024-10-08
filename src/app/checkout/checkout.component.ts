import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular/componentes-angular.module'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html', 
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  isLinear = true;  
  customerFormGroup!: FormGroup;
  paymentFormGroup!: FormGroup;
  reviewFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Inicialização dos formulários
    this.customerFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.paymentFormGroup = this._formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('\\d{16}')]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });

    this.reviewFormGroup = this._formBuilder.group({
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onHome(){
    this.router.navigate(['home']);
  }

  // Lógica para checkout final
  submitOrder() {
    if (this.reviewFormGroup.valid) {
      console.log('Pedido confirmado!');
      // Lógica para enviar o pedido
    }
  }
}
