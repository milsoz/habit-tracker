import { Component } from '@angular/core';
import { Nav } from '../components/shared/nav/nav';
import { Menu } from '../components/app/menu/menu';
import { Footer } from '../components/shared/footer/footer';

@Component({
  selector: 'app-app-page',
  imports: [Nav, Menu, Footer],
  templateUrl: './app-page.html',
  styleUrl: './app-page.scss',
})
export class AppPage {}
