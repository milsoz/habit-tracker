import { Component } from '@angular/core';
import { Nav } from '../components/nav/nav';
import { Hero } from '../components/hero/hero';
import { About } from '../components/about/about';
import { Faq } from '../components/faq/faq';

@Component({
  selector: 'app-home-page',
  imports: [Nav, Hero, About, Faq],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
