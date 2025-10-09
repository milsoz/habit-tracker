import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { AppPage } from './features/app/app-page/app-page';

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
