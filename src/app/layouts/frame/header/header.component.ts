import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ComponentesAngularModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() cartOpened = new EventEmitter<void>();
  openCart() {
    this.cartOpened.emit();
  }
  cartItems = [
    { name: 'Acarajé', price: 50, image: 'assets/acaraje.jpg' },
    { name: 'Pato no Tucupi', price: 60, image: 'assets/pato-no-tucupi.jpg' },
    { name: 'Feijoada', price: 30, image: 'assets/feijoada.jpg' },
    { name: 'Coxinha', price: 25, image: 'assets/coxinha.jpg' },
  ]
}
