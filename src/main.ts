import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// DELETE import { AppModule } from './app/app.module';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
      path: '',
      loadComponent: () => import("./app/app.component").then(module => module.AppComponent)
  },
];

// DELETE platformBrowserDynamic().bootstrapModule(AppModule)
// DELETE   .catch(err => console.error(err));

 bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule,),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
    ]
  })
  .catch(err => console.error(err));