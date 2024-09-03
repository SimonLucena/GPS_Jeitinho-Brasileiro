import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../frame/header/header.component';
import { FooterComponent } from '../../frame/footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ComponentesAngularModule, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
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
        console.log(data.nome);
        this.data = data;
      });
  }
}
