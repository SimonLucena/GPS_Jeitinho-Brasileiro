import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../frame/header/header.component';
import { FooterComponent } from '../../frame/footer/footer.component';
import { apiUrl } from '../../../componentes-angular/api-url';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ComponentesAngularModule, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
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
        console.log(data.nome);
        this.data = data;
      });
  }
}
