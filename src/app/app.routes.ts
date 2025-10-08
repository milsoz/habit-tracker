import { Routes } from '@angular/router';
import { AppPage } from './pages/app-page/app-page';
import { HomePage } from './pages/home-page/home-page';

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
