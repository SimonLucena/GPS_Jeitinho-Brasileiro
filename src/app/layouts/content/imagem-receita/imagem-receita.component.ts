import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { apiUrl } from 'src/app/componentes-angular/api-url';

@Component({
  selector: 'app-imagem-receita',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <img src="{{getImageUrl()}}" alt="" height="420em">
  `,
  styleUrls: ['./imagem-receita.component.css']
})
export class ImagemReceitaComponent {
  @Input() post!: any;
  apiUrl = apiUrl;
  caminho!: string; // Declare caminho without initialization

  ngOnInit(): void {
    if (this.post) {
      this.caminho = this.fixProductName(this.post.imagemUrl);
    }
  }

  private removeAccents(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Function to format the product name to a proper file name
  fixProductName(productName: string): string {
    const noAccents = this.removeAccents(productName);
    return noAccents.toLowerCase().replace(/\s+/g, '_');
  }

  getImageUrl(): string {
    return `${this.apiUrl}/public/images/produtos/${this.caminho}.jpg`;
  }
}
