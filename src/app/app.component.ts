import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemReceitaComponent } from './layouts/content/imagem-receita/imagem-receita.component';
import { HeaderComponent } from './layouts/frame/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './layouts/start/login/login.component';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { RegistroComponent } from './layouts/start/registro/registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FormsModule, RegistroComponent, HttpClientModule, RouterLink, RouterOutlet, CommonModule, ImagemReceitaComponent, HeaderComponent, RouterModule],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
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
}
