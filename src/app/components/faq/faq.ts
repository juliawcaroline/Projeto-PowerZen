import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  activeIndex = signal(null);
  
  faqs = [
    {
      question: 'O que é PowerZen e como funciona?',
      answer: 'PowerZen é uma bebida energética natural que combina ingredientes cuidadosamente selecionados para fornecer energia sustentável e foco mental. Diferente dos energéticos tradicionais, nossa fórmula utiliza extratos naturais que liberam energia gradualmente, evitando picos e quedas bruscas.'
    },
    {
      question: 'Qual é a quantidade de cafeína em cada lata?',
      answer: 'Cada lata de PowerZen contém 80mg de cafeína natural, equivalente a uma xícara de café espresso. Essa quantidade foi cientificamente calculada para proporcionar energia sem causar ansiedade ou tremores.'
    },
    {
      question: 'PowerZen é seguro para consumo diário?',
      answer: 'Sim! PowerZen foi desenvolvido com ingredientes naturais e pode ser consumido diariamente. Recomendamos o consumo de até 2 latas por dia, preferencialmente pela manhã ou início da tarde para não interferir no sono noturno.'
    },
    {
      question: 'Quais são os ingredientes principais?',
      answer: 'Nossa fórmula exclusiva contém: cafeína natural de guaraná, L-teanina para foco mental, vitaminas do complexo B, ginseng brasileiro, taurina natural e extrato de chá verde. Todos 100% naturais e veganos.'
    },
    {
      question: 'PowerZen tem açúcar?',
      answer: 'Oferecemos duas versões: PowerZen Original com 12g de açúcar natural de cana por lata e PowerZen Zero com adoçantes naturais (stevia). Ambas mantêm o sabor excepcional e os mesmos benefícios energéticos.'
    }
  ];
  
  toggleFaq(index) {
    if (this.activeIndex() === index) {
      this.activeIndex.set(null);
    } else {
      this.activeIndex.set(index);
    }
  }
  
  isActive(index) {
    return this.activeIndex() === index;
  }
}

