import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { apiUrl } from 'src/app/componentes-angular/api-url';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ComponentesAngularModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  cartVisible = false;

  url:string = `${apiUrl}/carrinho/`;

  carrinho: Item[];

  constructor(public http: HttpClient, public router: Router, public dialog: MatDialog ) {
    this.carrinho = new Array<Item>();
    this.getCart().subscribe(
      (response) => {
        response.itens.map((item:any) => {
          let quantidade = item.quantidade;
          let produto = item.produto;
          let produtoFinal: Item = {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: quantidade,
          }
          this.carrinho.push(produtoFinal);

        });
      },
      (error) => {
        console.error('Erro ao obter o carrinho:', error);
      }
    );
  }
  
  storedResponse = localStorage.getItem('userData');
  public userName: string = '';

  ngOnInit(): void {
    if(this.storedResponse){
      const userData = JSON.parse(this.storedResponse);
      this.userName = userData.user.nome;
      // console.log('User ID:', userData.user.nome);
    }
  }



  @Output() cartOpened = new EventEmitter<void>();
  openCart() {
    this.cartVisible = true;
    this.carrinho.map((item) => {console.log(item)});
  }
 

  logout(){
    window.location.href = '/login';
  }

  // @Output() productAdded = new EventEmitter<void>();
  addProduto(index:number ):Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found in localStorage');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const body = {
      produtoId: index,
      quantidade: 1
    };
    return this.http.post<any>(`${this.url}adicionar`, body, {headers} )
  }

  removerProduto(index:number ):Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const body = {
      produtoId: index,
      quantidade: -1
    };
    return this.http.post<any>(`${this.url}adicionar`, body, {headers} )
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