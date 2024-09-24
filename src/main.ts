// Simon Esteve aqui(infelizmente) :/
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import routeConfig from './app/routes';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    provideAnimations(),
    provideAnimations(),
    provideAnimations(),
    provideAnimations()
]
})
  .catch((err) => console.error(err));