import { Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesAngularModule } from '../../componentes-angular/componentes-angular/componentes-angular.module';
import { HeaderComponent } from '../frame/header/header.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from '../frame/footer/footer.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';


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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the `id` from the route parameters
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    console.log('User ID:', this.userId);
    console.log('User Name:', this.userName);
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

  // httpClient = inject(HttpClient);
  // data:any[] = [];

  // ngOnInit(): void {
  //   this.fetchData();
  // }

  // fetchData(){
  //   this.httpClient
  //     .get('http://25.67.183.246:3011/user/login')
  //     .subscribe((data: any) => {
  //       // console.log(data.nome);
  //       this.data = data;
  //     });
  // }
}
