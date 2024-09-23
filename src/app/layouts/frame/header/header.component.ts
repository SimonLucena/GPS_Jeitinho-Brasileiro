import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { apiUrl } from 'src/app/componentes-angular/api-url';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ComponentesAngularModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() cartOpened = new EventEmitter<void>();
  openCart() {
    this.cartVisible = true;
    this.carrinho.map((item) => {console.log(item)});
  }

  addProduto(index:number ):Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const body = {
      produtoId: index,
      quantidade: 1
    };
    return this.http.post<any>('http://25.67.183.246:3011/carrinho/adicionar', body, {headers} )
  }

  removerProduto(index:number ):Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const body = {
      produtoId: index,
      quantidade: -1
    };
    return this.http.post<any>('http://25.67.183.246:3011/carrinho/adicionar', body, {headers} )
  }

  getCart():Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any[]>(this.url, { headers } )
  }

  closeCart() {
    this.cartVisible = false;
  }

  increaseQuantity(index: number) {
    const produto = this.carrinho[index];
    const id = produto.id;
    this.addProduto(id).subscribe(() => this.carrinho[index].quantidade++)
  }
  
  decreaseQuantity(index: number) {
    const produto = this.carrinho[index];
    const id = produto.id;
    this.removerProduto(id).subscribe(() => this.carrinho[index].quantidade--)
  }

  removeItem(index: number) {
    this.carrinho.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }

  checkout() {
    alert('Redirecionando para a página de checkout');
  }
}
interface Item {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}
