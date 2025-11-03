import { Injectable } from '@angular/core';
import { CARTES, Card } from '../data/cards';

@Injectable({ providedIn: 'root' })
export class CardsService {
  getAll(): Card[] {
    return CARTES;
  }

  getByNiveau(niveau: string): Card[] {
    return CARTES.filter(c => c.niveau === niveau);
  }

  getRandomByNiveau(niveau: string): Card | undefined {
    const list = this.getByNiveau(niveau);
    if (list.length === 0) return undefined;
    return list[Math.floor(Math.random() * list.length)];
  }
}
