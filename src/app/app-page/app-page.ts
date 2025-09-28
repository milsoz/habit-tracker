import { Component } from '@angular/core';
import { Nav } from '../components/shared/nav/nav';
import { Menu } from '../components/app/menu/menu';

@Component({
  selector: 'app-app-page',
  imports: [Nav, Menu],
  templateUrl: './app-page.html',
  styleUrl: './app-page.scss',
})
export class AppPage {}
