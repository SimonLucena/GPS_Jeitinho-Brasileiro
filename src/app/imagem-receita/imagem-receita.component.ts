import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-imagem-receita',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <img src="http://25.67.183.246:3011{{post.imagemUrl}}" alt="" height="420em">
  `,
  styleUrls: ['./imagem-receita.component.css']
})
export class ImagemReceitaComponent {
  @Input() post!: any;
}
