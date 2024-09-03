import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ComponentesAngularModule, CommonModule],
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {
  httpClient = inject(HttpClient);
  data:any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }
  /*
    categoria_id
    descricao
    estoque
    id
    imagemUrl
    nome
    preco 
  */
  fetchData(){
    this.httpClient
      .get('http://25.67.183.246:3011/produtos/')
      .subscribe((data: any) => {
        // console.log(data.nome);
        this.data = data;
      });
  }

  buyProduct(): void {
    // Lógica para comprar o produto
    // alert(`Produto comprado! Quantidade: ${this.quantity}, CEP: ${this.cep}`);
  }
}

/*
<div *ngFor="let product of data" class="product-container">
    <!-- Imagem do Produto -->
    <img [src]="product.imagemUrl" alt="{{ product.name }}" class="product-image">

    <!-- Informações do Produto -->
    <div class="product-info">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">R$ {{ product.price }}</div>

        <!-- Descrição do Produto -->
        <div class="product-description">
            <p>{{ product.description }}</p>
        </div>

        <!-- Quantidade -->
        <div class="quantity-container">
            <label for="quantity">Quantidade:</label>
            <input type="number" id="quantity" name="quantity" class="quantity-input" min="1" [(ngModel)]="quantity" value="1">
        </div>

        <!-- CEP -->
        <div class="cep-container">
            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" class="cep-input" placeholder="00000-000" [(ngModel)]="cep">
        </div>

        <!-- Botão de Compra -->
        <div class="buy-button-container">
            <button class="buy-button" (click)="buyProduct()">Comprar</button>
        </div>
    </div>
</div>
*/