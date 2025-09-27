import { Component } from '@angular/core';
import { Nav } from '../components/nav/nav';
import { Hero } from '../components/hero/hero';
import { About } from '../components/about/about';

@Component({
  selector: 'app-home-page',
  imports: [Nav, Hero, About],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
