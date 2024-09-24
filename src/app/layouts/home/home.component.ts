import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesAngularModule } from '../../componentes-angular/componentes-angular/componentes-angular.module';
import { HeaderComponent } from '../frame/header/header.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from '../frame/footer/footer.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/componentes-angular/api-url';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ComponentesAngularModule, HeaderComponent, FooterComponent, RouterOutlet, MatIconModule, HttpClientModule],
  providers: [CartService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  userId: string = '';
  userName: string|null = localStorage.getItem('userData.user.nome');
  storedResponse = localStorage.getItem('userData');
  cartItems: Item[] = [];
  url:string = `${apiUrl}/produtos/`;

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.registrar();
    this.userId = this.route.snapshot.paramMap.get('id') || '';

    if (this.storedResponse) {
      const userData = JSON.parse(this.storedResponse);
      // Process userData if needed
    }

    // Fetch the cart items when the component initializes
    this.loadCart();
  }


  @ViewChild('drawer') drawer!: MatSidenav;

  ngAfterViewInit() {
  }

  openCart() {
    if (this.drawer) {
      this.drawer.toggle();
    } else {
      console.error('Drawer não está inicializado!');
    }
  }

  loadCart(): void {
    this.cartService.getCart().subscribe(
      (response) => {
        this.cartService.initializeCart(response); // Assuming initializeCart updates the service's cart
        this.cartItems = this.cartService.carrinho; // Update local cart items
      },
      (error) => {
        console.error('Erro ao obter o carrinho:', error);
      }
    );
  }

  criarProdutos(produto: Produto):Observable<any> {
    return this.http.post<any>(this.url, produto);
  };

  registrar() {
    const produtos: Produto[] = [
      {
        nome: 'Acarajé', preco: 50, imagemUrl: '/public/images/produtos/acaraje.jpg',
        descricao: '',
        categoria_id: 3,
        estoque: 99,
        createdAt: '',
        updatedAt: '',
        id: 3
      },
      {
        nome: 'Pato no Tucupi', preco: 60, imagemUrl: '/public/images/produtos/pato_no_tucupi.jpg',
        descricao: '',
        categoria_id: 3,
        estoque: 99,
        createdAt: '',
        updatedAt: '',
        id: 4
      },
      {
        nome: 'Feijoada', preco: 30, imagemUrl: '/public/images/produtos/feijoada.jpg',
        descricao: '',
        categoria_id: 3,
        estoque: 99,
        createdAt: '',
        updatedAt: '',
        id: 5
      },
      {
        nome: 'Coxinha', preco: 25, imagemUrl: '/public/images/produtos/coxinha.jpg',
        descricao: '',
        categoria_id: 3,
        estoque: 99,
        createdAt: '',
        updatedAt: '',
        id: 7
      },
    ];
    
    produtos.forEach((product) => {
      this.criarProdutos(product).subscribe(
        (response) => localStorage.setItem('token', response.token),
        (error) => console.error('Erro ao criar produtos:', error)
      );
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
interface Item {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}