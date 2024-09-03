import { Component } from '@angular/core';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ComponentesAngularModule,
  ],
  template: `
    <div class="header">
      <div class="logo">
        <a href="">
          <img src="/assets/logo.png" alt="Logo" />
        </a>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="O que você está buscando?" />
        <button>
          <mat-icon>search</mat-icon> <!-- Ícone de busca -->
        </button>
      </div>
      <div class="account-cart">
        <a href="/login" class="account">
          <mat-icon>account_circle</mat-icon> <!-- Ícone de conta -->
          <span>Minha conta</span>
        </a>
        <a href="#" class="cart">
          <mat-icon>shopping_cart</mat-icon> <!-- Ícone de carrinho -->
          <span>Meu carrinho</span>
          <span class="cart-count">0</span>
        </a>
      </div>
    </div>

    <div class="subheader">
      <a mat-button href="">Início</a>
      <a mat-button href="/produtos">Produtos</a>
      <a mat-button>Contato</a>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
