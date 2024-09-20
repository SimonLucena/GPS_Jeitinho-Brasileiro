import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importe CommonModule
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../componentes-angular/api-url';
import { ProductComponent } from '../layouts/content/product/product.component';
import { HeaderComponent } from "../layouts/frame/header/header.component";
import { FooterComponent } from "../layouts/frame/footer/footer.component";

@Component({
  selector: 'app-prod-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],   
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  apiUrl = apiUrl;
  httpClient = inject(HttpClient);
  route = inject(ActivatedRoute); 
  router = inject(Router);
  product: any = {};  

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); 
    if (productId) {
      this.fetchProductDetails(parseInt(productId)); 
    }
  }

  fetchProductDetails(produtoId: number): void {
    this.httpClient
      .get(`${apiUrl}/produtos/${produtoId}`)  
      .subscribe({
        next: (data: any) => {
          this.product = data;  
          console.log('Produto carregado:', this.product);
        },
        error: (error) => {
          console.error('Erro ao buscar o produto:', error);
        }
      });
  }

  voltarParaProdutos(): void {
    this.router.navigate(['/produtos']);  
  }
}
