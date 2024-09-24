import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../componentes-angular/api-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url: string = `${apiUrl}/carrinho/`;
  carrinho: Item[] = [];

  constructor(private http: HttpClient) {}

  getCart(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any[]>(this.url, { headers });
  }

  initializeCart(response: any): void {
    this.carrinho = response.itens.map((item: any) => {
      const produto = item.produto;
      return {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: item.quantidade,
      } as Item;
    });
  }

  addProduto(productId: number): Observable<any> {
    return this.addProdutoCarrinho(productId); // Retorna o Observable para que o componente possa assinar
  }  

  private addProdutoCarrinho(productId: number): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found in localStorage');
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { produtoId: productId, quantidade: 1 };
    return this.http.post<any>(`${this.url}adicionar`, body, { headers });
  }

  removerProduto(productId: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    const body = { produtoId: productId, quantidade: -1 };
    return this.http.post<any>(`${this.url}adicionar`, body, { headers });
  }

  increaseQuantity(index: number): void {
    const produto = this.carrinho[index];
    const id = produto.id;
    this.addProdutoCarrinho(id).subscribe(
      (response) => {
        this.carrinho[index].quantidade++;
        console.log('Quantidade aumentada com sucesso', response);
      },
      (error) => {
        console.error('Erro ao aumentar quantidade:', error);
      }
    );
  }

  decreaseQuantity(index: number): void {
    const produto = this.carrinho[index];
    const id = produto.id;
    this.removerProduto(id).subscribe(() => {
      this.carrinho[index].quantidade--;
    });
  }

  removeItem(index: number): void {
    this.carrinho.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }

  checkout(): void {
    alert('Redirecionando para a página de checkout');
  }
}

interface Item {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}
