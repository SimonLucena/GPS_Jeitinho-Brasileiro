import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/start/login/login.component';
import { RegistroComponent } from './layouts/start/registro/registro.component';
import { HomeComponent } from './layouts/home/home.component'
import { ProductsComponent } from './layouts/content/products/products.component'
import { ProdDetailsComponent } from './prod-details/prod-details.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/:id',
        component: HomeComponent
    },
    {
        path: 'produtos',
        component: ProductsComponent
    },
    {
        path: 'product-details/:id',
        component: ProdDetailsComponent
    }
];

export default routeConfig;