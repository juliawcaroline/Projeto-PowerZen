import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { label: 'Como Usar', href: '#como-usar' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' }
  ];
  
  products = [
    'PowerZen Original',
    'PowerZen Zero Açúcar',
    'PowerZen Focus'
  ];
  
  socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' }
  ];
  
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

