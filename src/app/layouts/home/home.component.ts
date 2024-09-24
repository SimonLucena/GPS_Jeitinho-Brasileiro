import { Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesAngularModule } from '../../componentes-angular/componentes-angular/componentes-angular.module';
import { HeaderComponent } from '../frame/header/header.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from '../frame/footer/footer.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/componentes-angular/api-url';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ComponentesAngularModule, HeaderComponent, FooterComponent, RouterOutlet, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userId: string = '';
  userName: string|null = localStorage.getItem('userData.user.nome');
  // userData = localStorage.getItem('userData');
  storedResponse = localStorage.getItem('userData');
  url:string = `${apiUrl}/produtos/`;

  constructor(public http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the `id` from the route parameters
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    if(this.storedResponse){
      const userData = JSON.parse(this.storedResponse);
      // console.log('User ID:', userData.user.nome);
    }
  }

  @ViewChild('drawer') drawer!: MatSidenav;

  cartItems = [
    { name: 'Acarajé', price: 50, image: 'assets/acaraje.jpg' },
    { name: 'Pato no Tucupi', price: 60, image: 'assets/pato-no-tucupi.jpg' },
    { name: 'Feijoada', price: 30, image: 'assets/feijoada.jpg' },
    { name: 'Coxinha', price: 25, image: 'assets/coxinha.jpg' },
  ];

  ngAfterViewInit() {
  }

  openCart() {
    if (this.drawer) {
      this.drawer.toggle();
    } else {
      console.error('Drawer não está inicializado!');
    }
  }

  /*
  "id": 6,
  "nome": "Laptop ABC",
  "descricao": "Laptop para profissionais",
  "preco": 4999.99,
  "categoria_id": 1,
  "estoque": 30,
  "createdAt": "2024-09-19T22:48:38.663Z",
  "updatedAt": "2024-09-19T22:48:38.663Z",
  "imagemUrl": "/public/images/produtos/default.jpg"
  */
  id:number = 0;
  nome:String = '';
  descricao:String = '';
  preco:number = 0;
  categoria_id:number = 1;
  estoque:number = 99;
  createdAt = "2024-09-19T22:48:38.663Z";
  updatedAt = "2024-09-19T22:48:38.663Z";
  imagemUrl:String = '';

  criarProdutos(produto: Produto):Observable<any> {
    return this.http.post<any>(this.url, produto);
  };

  registrar() {
    const produtos: Produto[] = [
      {
        nome: 'Acarajé', preco: 50, imagemUrl: 'assets/acaraje.jpg',
        descricao: '',
        categoria_id: 0,
        estoque: 0,
        createdAt: '',
        updatedAt: '',
        id: 2
      },
      {
        nome: 'Pato no Tucupi', preco: 60, imagemUrl: 'assets/pato-no-tucupi.jpg',
        descricao: '',
        categoria_id: 0,
        estoque: 0,
        createdAt: '',
        updatedAt: '',
        id: 3
      },
      {
        nome: 'Feijoada', preco: 30, imagemUrl: 'assets/feijoada.jpg',
        descricao: '',
        categoria_id: 0,
        estoque: 0,
        createdAt: '',
        updatedAt: '',
        id: 4
      },
      {
        nome: 'Coxinha', preco: 25, imagemUrl: 'assets/coxinha.jpg',
        descricao: '',
        categoria_id: 0,
        estoque: 0,
        createdAt: '',
        updatedAt: '',
        id: 5
      },
    ];
    produtos.forEach((product) => {
      this.criarProdutos(product).subscribe(qualquer => localStorage.setItem('token', qualquer.token));
    });
  };

}
interface Produto {
  id:number;
  nome:String;
  descricao:String;
  preco:number;
  categoria_id:number;
  estoque:number;
  createdAt:String;
  updatedAt:String;
  imagemUrl:String;
}
