import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/componentes-angular/api-url';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ComponentesAngularModule, CommonModule],
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent implements OnInit {
  apiUrl = apiUrl;
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
      .get(`${apiUrl}/produtos/`)
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