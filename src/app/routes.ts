import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/start/login/login.component';
import { RegistroComponent } from './layouts/start/registro/registro.component';

const routeConfig: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
];

export default routeConfig;