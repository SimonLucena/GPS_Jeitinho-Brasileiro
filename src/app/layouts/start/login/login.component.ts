import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { apiUrl } from 'src/app/componentes-angular/api-url';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, HttpClientModule, CommonModule],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  apiUrl = apiUrl;
  email:string = '';
  password:string = '';
  error:boolean = false;

  url:string = `${apiUrl}/user/login`;

  constructor(public http: HttpClient, public router: Router) { }
  
  login_() {
    this.login().subscribe({
      next: (response) => {
        localStorage.setItem('userData', response); // Assuming your API response includes a token
        this.router.navigate(['/home']); // Navigate to 'home' on successful login  -- , response.id
      },
      error: (err) => {
        this.error = true;
      }
    });
  };


  login():Observable<any> {
    const user: User = {
      email: this.email,
      password: this.password
    };
    console.log(user)
    return this.http.post<any>(this.url, user);
  };

  cancelar(){
    this.router.navigate(['/home']); // Navigate
  }
}
interface User {
  email: string;
  password: string;
}