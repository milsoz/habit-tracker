import { Component } from '@angular/core';
import { Nav } from '../../../shared/components/nav/nav';
import { Menu } from '../components/menu/menu';
import { Footer } from '../../../shared/components/footer/footer';

@Component({
  selector: 'app-app-page',
  imports: [Nav, Menu, Footer],
  templateUrl: './app-page.html',
  styleUrl: './app-page.scss',
})
export class AppPage {}
