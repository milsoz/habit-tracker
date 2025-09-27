import { Routes } from '@angular/router';
import { AppPage } from './app-page/app-page';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'app',
    component: AppPage,
  },
];
