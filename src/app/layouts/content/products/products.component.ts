import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; // Importar Router
import { HeaderComponent } from '../../frame/header/header.component';
import { FooterComponent } from '../../frame/footer/footer.component';
import { apiUrl } from '../../../componentes-angular/api-url';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ComponentesAngularModule, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  apiUrl = apiUrl;
  url:string = `${apiUrl}/carrinho/`;
  httpClient = inject(HttpClient);
  routerProducts = inject(Router); 
  data: any[] = [];
  carrinho: Item[];

  ngOnInit(): void {
    this.fetchData();
  }

  constructor(public http: HttpClient, public router: Router) {
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

  fetchData(){
    this.httpClient
      .get(`${apiUrl}/produtos/`)
      .subscribe((data: any) => {
        this.data = data;
      });
  }

  detalharProduto(produtoId: number): void {
    this.routerProducts.navigate(['/product-details', produtoId]);
  }

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
    return this.httpClient.post<any>(`${this.apiUrl}/carrinho/adicionar`, body, {headers} )
  }
  getCart():Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<any[]>(this.url, { headers } )
  }
}
interface Item {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}