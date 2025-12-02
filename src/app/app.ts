import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Steps } from './components/steps/steps';
import { Faq } from './components/faq/faq';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Steps, Faq, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
