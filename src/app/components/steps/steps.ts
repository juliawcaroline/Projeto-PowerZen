import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steps.html',
  styleUrl: './steps.css'
})
export class Steps {
  steps = [
    {
      number: 1,
      title: 'Abra e Beba',
      description: 'Beba gelado para uma experiência refrescante.',
      icon: '🥤'
    },
    {
      number: 2,
      title: 'Aguarde 15-20 Min',
      description: 'Ingredientes naturais começam a agir rapidamente. Você sentirá um aumento gradual na energia.',
      icon: '⏱️'
    },
    {
      number: 3,
      title: 'Aproveite a Energia',
      description: 'Energia estável por até 3 horas sem tremores ou quedas bruscas. Foco aprimorado para estudos ou trabalho.',
      icon: '🚀'
    }
  ];
}

