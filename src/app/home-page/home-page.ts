import { Component } from '@angular/core';
import { Nav } from '../components/shared/nav/nav';
import { Hero } from '../components/home/hero/hero';
import { About } from '../components/home/about/about';
import { Faq } from '../components/home/faq/faq';
import { Tagline } from '../components/home/tagline/tagline';
import { Footer } from '../components/shared/footer/footer';

@Component({
  selector: 'app-home-page',
  imports: [Nav, Hero, About, Faq, Tagline, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
