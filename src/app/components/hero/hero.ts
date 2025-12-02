import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  badges = [
    { text: '100% Natural', icon: '🌿' },
    { text: 'Foco Intenso', icon: '⚡' }
  ];
}

