import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { apiUrl } from 'src/app/componentes-angular/api-url';

@Component({
  selector: 'app-imagem-receita',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <img src="{{apiUrl}}{{post.imagemUrl}}" alt="" height="420em">
  `,
  styleUrls: ['./imagem-receita.component.css']
})
export class ImagemReceitaComponent {
  @Input() post!: any;
  apiUrl = apiUrl;
}
