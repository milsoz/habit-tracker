import { Component } from '@angular/core';
import { Nav } from '../../../shared/components/nav/nav';
import { Menu } from '../components/menu/menu';
import { Footer } from '../../../shared/components/footer/footer';
import { MenuDataService } from '../services/menu-data';

@Component({
  selector: 'app-app-page',
  imports: [Nav, Menu, Footer],
  templateUrl: './app-page.html',
  styleUrl: './app-page.scss',
  providers: [MenuDataService],
})
export class AppPage {}
