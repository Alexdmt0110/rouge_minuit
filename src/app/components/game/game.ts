import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../services/cards';
import { Card } from '../../data/cards';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.scss'
})
export class GameComponent {
  carte?: Card;

  constructor(private cardsService: CardsService) {}

  tirerCarte() {
    console.log('Tirage d’une carte…');
    this.carte = this.cardsService.getRandomByNiveau('bouillant');
    console.log(this.carte);
  }
}
