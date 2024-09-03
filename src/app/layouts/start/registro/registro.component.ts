import { ComponentesAngularModule } from '../../../componentes-angular/componentes-angular/componentes-angular.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ComponentesAngularModule, FormsModule, HttpClientModule],
  templateUrl: 'registro.component.html',
  styleUrls: ['registro.component.css']
})


export class RegistroComponent {
  nome:string = '';
  email:string = '';
  password:string = '';
  repetir:string = '';

  vazio:boolean = false;
  senhasDiferentes:boolean = false;

  url:string = 'http://25.67.183.246:3011/user/register';

  constructor(public http: HttpClient, public router: Router) { }

  registrar() {
    if (this.password == this.repetir) {
      if (this.nome != '' && this.email != '' && this.password != '') {
        this.criar().subscribe(qualquer => localStorage.setItem('token', qualquer.token));
        this.router.navigate(['/login']);
      } else {
        this.vazio = true;
      }
    } else {
      this.senhasDiferentes = true;
    }

  };

  criar():Observable<any> {
    const user: User = {
      nome: this.nome,
      email: this.email,
      password: this.password
    };
    return this.http.post<any>(this.url, user);
  };

}

interface User {
  nome: string;
  email: string;
  password: string;
}